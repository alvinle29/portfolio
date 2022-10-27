import React from 'react'

import About from "./About/About"
import Contact from "./Contact/Contact"
import Projects from "./Projects/Projects"
import Welcome from "./Welcome/Welcome"

const Main = () => {
  return (
    <div>
      <Welcome />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default Main