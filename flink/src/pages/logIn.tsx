import { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { getDisplayName } from "next/dist/shared/lib/utils";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import LogIn from "../components/log-in";
import Image from 'next/image'



export default function loginOndas() {
  

  return (

    <>
      <header className="bg-white py-4 px-6 flex items-center justify-between border-gray-200 relative">
        <div className="flex z-30">
          <Image
            src="/Familylink Simple.png"
            alt="Picture of the author"
            width={40}
            height={40}
          />
        </div>
        <div className="relative">
          <svg
            className="absolute top-0 left-0 z-10"
            viewBox="0 0 1366 209" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1364 0H-2V72.6316H1364V0Z" fill="#7E22CE" />
            <path d="M1364 46.4036H956V127.105H1364V46.4036Z" fill="#7E22CE" />
            <path d="M552 31.272H329V111.974H552V31.272Z" fill="#7E22CE" />
            <path d="M73 31.272H-2V111.974H73V31.272Z" fill="#7E22CE" />
            <path d="M-116 190.971C-116 190.971 100.87 84.8151 190.501 76.4756C298.712 66.4081 353.52 144.484 462 138.011C570.751 131.521 628.361 78.2571 736.5 64.9534C914.667 43.0359 1010 217.198 1171 170.291C1223.65 154.95 1286.69 119.427 1341.5 119.427C1414.5 119.427 1599.68 88.0765 1599.68 88.0765" stroke="#85DFF3" strokeWidth="38" />
            <path d="M-66 159.246C-66 159.246 76.9074 51.0221 171.333 43.6339C285.334 34.7139 341.799 109.738 456.028 104.257C570.54 98.7623 636.526 43.7898 750.5 31.7764C935.5 22.6974 992.769 205.661 1167 137.585C1224.5 115.118 1305 75.041 1366 75.041C1451.72 75.041 1576.68 43.6339 1576.68 43.6339" stroke="#4151DA" strokeWidth="53" />
          </svg>
        </div>
        <nav className="z-30">
          <a href="/Landing" className="ml-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Landing</a>
        </nav>
      </header>
      <LogIn />
    </>
  )
}