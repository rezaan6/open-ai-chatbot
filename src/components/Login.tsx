"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Login() {
  return (
    <div className="bg-slate-900 h-screen flex items-center justify-center">
      <div className="flex w-full max-w-md bg-white shadow-md rounded-lg overflow-hidden">
        <div className="border-r-2 border-gray-300 px-4 py-6">
          {/* This is the line to the left */}
        </div>
        <div className=" px-8 py-10">
          <h1 className="text-6xl font-bold mb-7">
            Open <span className="text-8xl text-blue-900 ">AI</span> Chatbot
          </h1>

          <button
            onClick={() => signIn("google")}
            className="flex items-center w-full justify-center tracking-widest gap-2 px-6 py-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm outline-none focus:outline-none hover:bg-gray-100 active:bg-gray-200"
          >
            <Image
              src="/google.png"
              alt="Google Logo"
              width={30}
              height={30}
              className="object-contain"
            />
            <span className="uppercase">Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}
