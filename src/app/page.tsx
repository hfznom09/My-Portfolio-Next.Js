"use client"
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Link from "next/link";
import Image from "next/image";


export default function Home() {

  const [text] = useTypewriter({
    words: [
      "UI/UX Designer",
      "Web Developer",
      "Mobile Developer",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 20,
    delaySpeed: 2000,

  });
  return (
    <main className="h-screen w-screen relative ">
      <div className="flex flex-row items-center  w-full h-full bg-cover bg-gradient-to-r from-black to bg-purple-950 sm:text-left " >
        <div className="md:pb-20  pl-20 flex flex-col gap-5 z-10 max-w-[672px] leading-tight text-white text-4xl font-semibold sm:text-left">
          <h1 className="text-[50px] text-white font-semibold">
            Make anything possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 sm:text-left  ">
              {" "}
              Web Development
            </span>
            {" "}
            Hi I&aposam
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 sm:text-left">
              {" "}
              Noman Anwar
            </span>
          </h1>
          <p className="text-white  text-4xl font-semibold pl-5 sm:text-center">
            {text} <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17" />
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5 pt-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-trasparent px-5 border hover:scale-110 scale-100 border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-trasparent border hover:scale-110 scale-100 border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Contact me
            </Link>

          </div>
        </div>
      </div>
      <div>
        <div className="absolute bottom-0 z-[5] w-full h-auto">
          <Image
            src="/trees.webp"
            alt="trees"
            width={2000}
            height={2000}
            className="w-full h-full"
          />
        </div>

        <Image
          src="/stars.png"
          alt="stars"
          height={1000}
          width={1000}
          className="absolute top-0 left-0 z-[10]"
        />
      </div>
    </main>

  )
}