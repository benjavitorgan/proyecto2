import { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { getDisplayName } from "next/dist/shared/lib/utils";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import Image from 'next/image';

import React, { useState, useEffect } from 'react';

const StickyHeaderExample: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
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
    <div className="min-h-screen bg-gray-100">
      <header className={`bg-gray-800 py-2 fixed w-full top-0 z-50 ${isSticky ? 'sticky' : ''}`}>
        <nav className="container mx-auto">
          <ul className="flex justify-center items-center space-x-6">
            <li><a href="#" className="text-white hover:text-orange-500 transition">Home</a></li>
            <li><a href="#" className="text-white hover:text-orange-500 transition">About</a></li>
            <li><a href="#" className="text-white hover:text-orange-500 transition">Services</a></li>
            <li><a href="#" className="text-white hover:text-orange-500 transition">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className={`mt-16 ${isSticky ? 'pt-16' : ''}`}>
        {/* Content goes here */}
      </main>
    </div>
  );
};

export default StickyHeaderExample;
