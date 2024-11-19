// NavBar.js
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NavBar({ triggerEarthquake }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 bg-opacity-30 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side (empty) */}
          <div className="flex-1 justify-start">
            <button onClick={triggerEarthquake} className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-slate-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <span>{`Simulate Eartquake`}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                  ></path>
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>
          </div>

          {/* Middle: Logo and Name */}
          <div className="flex items-center justify-center flex-1">
            <Link href="/">
              <div className="flex items-center">
                <img
                  src="logo1.svg"
                  className="w-8 h-8 transition-transform duration-500 hover:rotate-180"
                ></img>
                <span className="ml-2 text-2xl font-semibold text-white">
                  OpenDeprem
                </span>
              </div>
            </Link>
          </div>

          {/* Right side: Buttons */}
          <div className="flex items-center space-x-4 flex-1 justify-end">
            <Link
              href="/about"
              className="inline-flex h-10   items-center justify-center rounded-md border border-slate-800 bg-[#060c1a] px-6 font-medium text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Site Hakkında
            </Link>
            <Link
              href="/"
              className="inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#060c1a,45%,#1e2631,55%,#060c1a)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Bağış
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

/*

<div className="absolute w-screen min-h-24 z-20 bg-transparent flex flex-row items-center justify-between">
            <div></div>
            <div className="flex flex-row align-middle items-center">
                <img src="logo.png" className="w-16 h-16 ml-5 mr-4 transform transition duration-500 hover:rotate-180 rotate-0" />
                <span className="text-white font-bold text-3xl text-center">OpenDeprem</span>
            </div>
            <div>
                <button onClick={triggerEarthquake} className="earthquake-trigger-button">
                    Trigger Earthquake
                </button>
            </div>
        </div>


*/
