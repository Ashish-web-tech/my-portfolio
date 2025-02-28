import React from 'react'
import Sidebar from './Sidebar'
import About from './About'
import Projects from './Projects'
import { Route, Routes } from 'react-router-dom'



const Parent = () => {
  return (
    <>
     <div id='parent' className='w-screen min-h-screen overflow-x-hidden flex relative'>
    <Sidebar />

      <Routes>
        <Route path='/' element ={<About />} />
        <Route path='/projects' element ={<Projects />} />
      </Routes>
    {/* <About /> */}
    {/* <Projects /> */}
    
    </div>
    
    </>
  )
}

export default Parent