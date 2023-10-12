import { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import Image from 'next/image'
import React, { useState, useEffect } from "react"; // Import useState and useEffect


const Ondas: NextPage = () => {
  const [isSticky, setIsSticky] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header className={`bg-purple-700 py-6 px-6 flex items-center justify-between ${isSticky ? 'sticky top-0 z-50' : ''}`}>
        <div className="flex">
          <Image
            src="/Familylink Simple.png"
            alt="Picture of the author"
            width={40}
            height={40}
          />
        </div>
        <nav>
          <a href="/PanelDeActividades" className="text-gray-300 font-medium hover:text-white hover:underline mx-4">Actividades</a>
          <a href="#" className="text-gray-300 font-medium hover:text-white hover:underline mx-4">Contactos</a>
          <a href="#" className="text-gray-300 font-medium hover:text-white hover:underline mx-4">Informacion</a>
          <a href="#" className="text-gray-300 font-medium hover:text-white hover:underline mx-4">Equipo</a>
          <a href="/logIn" className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Iniciar sesion</a>
          <a href="/NewAccounts" className="ml-4 font-medium bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Registrarse</a>
        </nav>
      </header>

      {/* Rest of your content */}
    </div>
  )
}

export default Ondas;
