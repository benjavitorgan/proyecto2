import { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { getDisplayName } from "next/dist/shared/lib/utils";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import NewAccount from '../components/NewAccount'
import HeaderComponent from '../components/Header'
import Image from 'next/image'

export default function NewAccounts() {
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
            className="absolute top-0 left-0"
            viewBox="0 0 1366 257"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="941" y="55" width="361" height="90" fill="#7E22CE"/>
            <rect y="30" width="1366" height="63" fill="#7E22CE"/>
            <path d="M-114 231.922C-114 231.922 102.87 126.689 192.501 118.422C300.712 108.442 355.52 185.839 464 179.422C572.751 172.989 630.361 120.188 738.5 107C916.667 85.2731 1012 257.921 1173 211.422C1225.65 196.214 1288.69 161 1343.5 161C1416.5 161 1601.68 129.922 1601.68 129.922" stroke="#85DFF3" strokeWidth="39"/>
            <path d="M-64 146.597C-64 146.597 75.0751 66.8195 173.739 55.6674C292.856 42.2034 354.038 124.762 473.489 115.155C593.235 105.523 616.995 74.9382 736 58C932.068 30.0927 989.434 197.012 1179.5 146.597C1301.5 114.234 1354.48 78.4957 1413.15 65.1527C1494.16 46.7288 1601 24 1601 24" stroke="#7E22CE" strokeWidth="49"/>
            <path d="M-64 203.473C-64 203.473 78.9074 96.1896 173.333 88.8656C287.334 80.0236 343.799 154.395 458.028 148.962C572.54 143.515 632.703 80.8816 746.677 68.9726C934.458 49.3506 994.769 249.484 1169 182C1226.5 159.729 1307 120 1368 120C1453.72 120 1578.68 88.8656 1578.68 88.8656" stroke="#4151DA" strokeWidth="45"/>
          
          </svg>
          
        </div>
      <nav className="z-30 flex-col ml-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          <a href="/Landing" >Landing</a>

        </nav>
    </header>
      
      <NewAccount/>
    
    
    </>
  )
}