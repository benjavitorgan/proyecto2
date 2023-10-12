import { getDisplayName } from "next/dist/shared/lib/utils";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { validarEmail } from './FuncionesValidacion';
import { signIn } from "next-auth/react";
import router from "next/router";

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [emailValido, setEmailValido] = useState(true);
  const [contraseña, setContraseña] = useState('');
  const [contraseñaValida, setContraseñaValida] = useState(true);
  const [isEmailMoved, setIsEmailMoved] = useState(false);
  const [isContraseñaMoved, setIsContraseñaMoved] = useState(false);

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const nuevoEmail = event.target.value;
    setEmail(nuevoEmail);
    const esValido = validarEmail(nuevoEmail);
    setEmailValido(esValido);
  };

  const handleChangeContraseña = (event: ChangeEvent<HTMLInputElement>) => {
    const nuevaContraseña = event.target.value;
    setContraseña(nuevaContraseña);
    setContraseñaValida(nuevaContraseña.length >= 8);
  };

  const handleEmailInputClick = () => {
    setIsEmailMoved(true);
    setIsContraseñaMoved(false);
  };

  const handleContraseñaInputClick = () => {
    setIsContraseñaMoved(true);
    setIsEmailMoved(false);
  };

  const handleInputBlur = () => {
    setIsEmailMoved(false);
    setIsContraseñaMoved(false);
  };

  const handleLogin = async () => {
    await signIn("credentials", {
      email,
      password: contraseña,
      method: "signIn",
      redirect: false,
    }).then((response) => {
      if (response?.ok) {
        void router.push("/");
      } else {
        alert("No se pudo entrar");
      }
    });
  };

  return (
    <main>
      <div>
        <svg
        className="absolute top-0 left-0 z-10"
        viewBox="0 0 1366 257"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="1366" height="127" fill="#7E22CE"/>
        <path d="M-114 242.922C-114 242.922 102.87 137.689 192.501 129.422C300.712 119.442 355.52 196.839 464 190.422C572.751 183.989 630.361 131.188 738.5 118C916.667 96.2731 1012 268.921 1173 222.422C1225.65 207.214 1288.69 172 1343.5 172C1416.5 172 1601.68 140.922 1601.68 140.922" stroke="#85DFF3" strokeWidth="31"/>
        <path d="M-98 159.597C-98 159.597 41.0751 79.8195 139.739 68.6674C258.856 55.2034 320.038 137.762 439.489 128.155C559.235 118.523 591.301 78.8701 710.306 61.9319C906.374 34.0246 1006.93 201.415 1197 151C1319 118.637 1320.48 91.4957 1379.15 78.1527C1460.16 59.7288 1567 37 1567 37" stroke="#7E22CE" strokeWidth="73"/>
        <path d="M-64 217.473C-64 217.473 78.9074 110.19 173.333 102.866C287.334 94.0236 343.799 168.395 458.028 162.962C572.54 157.515 632.703 94.8816 746.677 82.9726C934.458 63.3506 994.769 263.484 1169 196C1226.5 173.729 1307 134 1368 134C1453.72 134 1578.68 102.866 1578.68 102.866" stroke="#4151DA" strokeWidth="39"/>
      </svg>
      </div>
    
      
    <div className="flex items-center justify-center h-screen border-t-blue-600">
      <div className="w-1/4 p-6 bg-white rounded shadow-xl shadow-grey">
        <h2 className="font-semibold text-3xl mb-4 text-center">Iniciar sesión</h2>
        <form>
          <div className="mb-4">
            <div className="">
              <div className="App items-center py-3">
                <label className="relative">
                  <input
                    className="w-full px-4 py-2 border-[2.5px] border-blue-700 rounded-md outline-none focus:border-blue-700 focus:text-black transition duration-200"
                    type="email"
                    id="email"
                    onClick={handleEmailInputClick}
                    onBlur={handleInputBlur}
                    onChange={handleChangeEmail}
                  />
                  {!emailValido && <p className="error-message text-red-600">El correo electrónico ingresado no es válido.</p>}
                  <span
                    className={`text-1xl text-black bg-white text-opacity-75 absolute left-4 -top-[1.5px] transition duration-200 ${
                      isEmailMoved || email !== '' ? 'transform -translate-y-[20.5px] text-opacity-100 text-sm text-blue-700' : ''
                    }`}
                  >
                    &nbsp;Email&nbsp;
                  </span>
                </label>
              </div>
              <div className="App items-center py-3">
                <label className="relative">
                  <input
                    className="w-full px-4 py-2 border-[2.5px] border-blue-700 rounded-md outline-none focus:border-blue-700 focus:text-black transition duration-200"
                    type="password"
                    id="password"
                    onClick={handleContraseñaInputClick}
                    onBlur={handleInputBlur}
                    onChange={handleChangeContraseña}
                  />
                  {!contraseñaValida && contraseña.length > 0 && (
                    <p className="error-message text-red-600">La contraseña debe tener al menos 8 caracteres.</p>
                  )}
                  <span
                    className={`text-1xl text-black bg-white text-opacity-75 absolute left-4 -top-[1.5px] transition duration-200 ${
                      isContraseñaMoved || contraseña !== '' ? 'transform -translate-y-[20.5px] text-opacity-100 text-sm text-blue-700' : ''
                    }`}
                  >
                    &nbsp;Contraseña&nbsp;
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <button className="w-1/2 px-4 py-2 text-white bg-blue-700 rounded hover:bg-blue-600" type="submit" onClick={handleLogin}>
              Entrar
            </button>
            <label htmlFor="text" className="py-0">
              ¿No tienes una cuenta? <a href="/NewAccounts" className="text-blue-600">Registrate</a>
            </label>
          </div>
        </form>
      </div>
    </div>
    </main>
  );
}

