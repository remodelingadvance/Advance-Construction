import React from 'react'
import Hero from '../components/Others/Hero'
import { projectHero } from '../assets/data/heroData'
import ProjectContent from '../components/ProjectContent/ProjectContent'

const Project = () => {
  return (
    <div>
      <Hero projectHero={projectHero} />
      <ProjectContent />
    </div>
  )
}

export default Project
