import React, { useState } from 'react';
import Image from 'next/image'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (

    <div className="relative">
      <button
        className={`fixed top-4 ${
          isOpen ? 'left-72' : 'left-4'
        } z-50 p-2 rounded-md bg-gray-800 text-white transition-all duration-300 ease-in-out`}
        onClick={toggleMenu}
       
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      

      {isOpen && (
        <div className="fixed top-0 left-0 w-3/4 lg:w-1/4 h-screen bg-gray-800 bg-opacity-50 z-40">
          <div className="flex flex-row h-16 w-full bg-purple-700 ">
          <Image
            src="/Familylink_Simple-removebg-preview.png"
            alt="Picture of the author"
            width={40}
            height={40}
          />
            
            <p className="flex pt-2 text-white text-5xl font-thin">Familylink</p>
          </div>
          
          <ul className="bg-white flex flex-col items-center justify-center h-screen -md shadow-md text-3xl">
            <li className="py-4 hover:underline "><a href="/Landing">Volver</a></li>
            <svg width="94" height="4" viewBox="0 0 94 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="94" height="4" rx="2" fill="black"/>
            </svg>
            <li className="py-4 hover:underline"><a href="/Landing">Terminos y condiciones</a></li>
            <svg width="94" height="4" viewBox="0 0 94 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="94" height="4" rx="2" fill="black"/>
            </svg>
            <li className="py-4 hover:underline"><a href="/Landing">Sobre nosotros</a></li>
            <svg width="94" height="4" viewBox="0 0 94 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="94" height="4" rx="2" fill="black"/>
            </svg>
            <li className="py-4 hover:underline"><a href="/NewAccounts">Crear cuenta</a></li>
          </ul>
          
        </div>

      )}
    </div>
  );
};

const PanelActs = () => {
  return (
    <main>
      <svg
        className="absolute top-0 left-0 z-10"
        viewBox="0 0 1366 209" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1364 0H-2V72.6316H1364V0Z" fill="#7E22CE"/>
        <path d="M1364 46.4036H956V127.105H1364V46.4036Z" fill="#7E22CE"/>
        <path d="M552 31.272H329V111.974H552V31.272Z" fill="#7E22CE"/>
        <path d="M73 31.272H-2V111.974H73V31.272Z" fill="#7E22CE"/>
        <path d="M-116 190.971C-116 190.971 100.87 84.8151 190.501 76.4756C298.712 66.4081 353.52 144.484 462 138.011C570.751 131.521 628.361 78.2571 736.5 64.9534C914.667 43.0359 1010 217.198 1171 170.291C1223.65 154.95 1286.69 119.427 1341.5 119.427C1414.5 119.427 1599.68 88.0765 1599.68 88.0765" stroke="#85DFF3" strokeWidth="38"/>
        <path d="M-66 159.246C-66 159.246 76.9074 51.0221 171.333 43.6339C285.334 34.7139 341.799 109.738 456.028 104.257C570.54 98.7623 636.526 43.7898 750.5 31.7764C935.5 22.6974 992.769 205.661 1167 137.585C1224.5 115.118 1305 75.041 1366 75.041C1451.72 75.041 1576.68 43.6339 1576.68 43.6339" stroke="#4151DA" strokeWidth="53"/>
      </svg>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen border-t-blue-600">
        <h1 className="py-5 text-3xl">Panel de actividades</h1>
        <div className="w-86 px-16 py-6  bg-white shadow-xl shadow-grey border-2 border-blue-700  rounded"> 
          <a href="" className="text-black text-xl font-thin">Crear un nuevo panel de actividades</a> 
        </div>
        <div className="py-3"></div>
        <div className=" w-86 px-16 py-6 bg-blue-700 shadow-xl shadow-grey border-2 border-blue-700 rounded">
          
          <a href="/Paneles"className="text-white text-xl font-thin">Unirme a nuevo panel de actividades</a>
        </div>
      </div>
    </main>
  );
};

export default PanelActs;
