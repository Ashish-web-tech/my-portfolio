import React from 'react'
import Parent from './components/Parent'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
    <div className='bg-black min-h-screen w-screen'>
      <BrowserRouter>
        <Parent />
      </BrowserRouter>
    </div>
    
    </>
  )
}

export default App