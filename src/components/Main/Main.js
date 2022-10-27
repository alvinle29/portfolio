import React from 'react'

import About from "./About/About"
import Contact from "./Contact/Contact"
import Projects from "./Projects/Projects"
import Home from "./Home/Home"

const Main = () => {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default Main