import {Dock, Navbar, Welcome} from "#components"
import gsap from "gsap"
import { Draggable } from "gsap/Draggable"

import { Finder, Image, Resume, Safari, Terminal, Text, Contact } from "#windows"

gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
     <Navbar/>
     <Welcome/>
     <Dock/>

     <Terminal/>
     <Safari/>
     <Resume/>
     <Finder/>
     <Text/>
     <Image/>
     <Contact/>
    </main>
  )
}

export default App
