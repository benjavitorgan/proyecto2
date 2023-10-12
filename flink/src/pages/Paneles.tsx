import React, { useState } from 'react';

interface Actividad {
  nombre: string;
  hora: string;
  completada: boolean;
}

const NuevaActividad = () => {
  const [actividades, setActividades] = useState<Actividad[]>([]);
  const [nombre, setNombre] = useState<string>('');
  const [hora, setHora] = useState<string>('');
  const [completada, setCompletada] = useState<boolean>(false);

  const handleCrearActividad = () => {
    if (nombre && hora) {
      const nuevaActividad: Actividad = {
        nombre,
        hora,
        completada,
      };
      setActividades([nuevaActividad, ...actividades]);
      setNombre('');
      setHora('');
      setCompletada(false);
    }
  };

  const handleCompletarActividad = (index: number) => {
    setActividades((prevActividades) =>
      prevActividades.map((actividad, i) =>
        i === index
          ? { ...actividad, completada: !actividad.completada }
          : actividad
      )
    );
  };
  
  
  

  return (
    <main>
        <header className="bg-purple-700 py-5 px-6 text-3xl text-white text-center">
            Panel de actividades:
        </header>

      <div className="text-center py-5">
        <h1 className="text-3xl">
          Crear una nueva actividad
        </h1>
      </div>
      <div className="px-20 py-6 bg-white shadow-xl border-2 border-blue-700 rounded">
        <div className="flex items-center space-x-5 ">
          <input
            type="text"
            placeholder="Nombre de la actividad"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-1/3 p-2 border-2 text-xl border-gray-300"
          />
          <input
            type="text"
            placeholder="Hora"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            className="w-1/3 p-2 border-2 text-xl border-gray-300"
          />
          <div className="w-1/3 text-right">
          <button
            onClick={handleCrearActividad}
            className="w-2/4 p-2 bg-blue-700 text-white"
          >
            Crear
          </button>
          </div>
        </div>
      </div>
      <div className="py-3"></div>
      <div className="px-16">
        {actividades.map((actividad, index) => (
          <div
            key={index}
            className={`flex justify-between items-center py-2 px-5 bg-gray-100 border-t border-b border-gray-300 ${
              actividad.completada ? 'line-through text-green-600 text-2xl' : ''
            }`}
          >
            <div>
              {actividad.hora}: {actividad.nombre}
            </div>
            <input
              type="checkbox"
              checked={actividad.completada}
              onChange={() => handleCompletarActividad(index)}
              className="w-5 h-5"
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default NuevaActividad;
