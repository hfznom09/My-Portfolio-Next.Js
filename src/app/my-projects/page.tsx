"use client"
import ProjectCard from '@/app/Component/ProjectCard'
import { Projects } from '../Constant/index'
import React from 'react'

const Page = () => {
  return (
    <div 
    style={{backgroundImage:"url(/Mountains.jpg)"}}
className="w-screen h-screen flex items-center justify-center bg-center">
<div className="grid grid-cols-2 gap-5 max-w-[90% sm:220px] max-h-[90% sm:220px] ">
{Projects.map((project, index) => (
          <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
          />
        ))}
      </div>
    </div>
  )
} 
export default Page