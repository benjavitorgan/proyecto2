import { z } from "zod";
import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure,
} from "~/server/api/trpc";

export const eventRouter = createTRPCRouter({
    crearEvento: publicProcedure
        .input(z.object({ dni: z.string(), date: z.string(), type: z.string(), dniPaciente: z.string(), event: z.string() }))
        .mutation(async ({ input, ctx }) => {
            const { dni, date, dniPaciente, event, type } = input;

            const nurse = await ctx.prisma.user.findUnique({
                where: {
                  dni: dni,
                },
                select: {
                  role: true,
                },
              });
              
              if (nurse && nurse.role === "NS") {
                return nurse;
              }

            if (!nurse) {
                throw new Error("No se encontro el usuario");
            }

            if (nurse?.role !== "NS") {
                throw new Error('Solo un medico puede crear eventos, intente cambiando su usuario!');
            }


            const newevent = await ctx.prisma.activities.create({
                data: {
                    date,
                    type,
                    event,
                    dniPaciente
                }
            });

            if (!newevent) {
                throw new Error("No se pudo crear el evento");
            }

            return newevent;
        }),
    buscarEvento: publicProcedure
        .input(z.object({ dni: z.string() }))
        .query(async ({ input, ctx }) => {
            const { dni } = input;

            //const dniPN = parseInt(dni);
            const dniPN = dni;

            if (!dniPN) {
                throw new Error("El número de dni no es válido.");
            }

            const act = await ctx.prisma.activities.findMany({
                where: {
                    dniPaciente: {
                        equals: dniPN
                    }
                },
                select: {
                    event: true,
                    date: true,
                    type: true
                }
            });

            if (!act) {
                throw new Error("Error al encontrar el evento");
            }

            return act;
        }),
});
