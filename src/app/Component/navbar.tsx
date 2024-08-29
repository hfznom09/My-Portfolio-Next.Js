
import React from 'react';
import Image from "next/image";
// import { Menu } from "lucide-react"

const navbar = () => {
  return (
    <header className='fixed top-0 z-[8] w-full h-0  justify-between items-center px-10 md:px-20 bg-transparent'>
      <nav className="">
         <Image
         src="/logo.png"
         alt="logo"
         width={120}
         height={120}
        />
        {/* <Menu /> */}
        </nav>
      
    </header>
      

  )
}

export default navbar
