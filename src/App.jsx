import React from 'react'
import Parent from './components/Parent'
import { HashRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
    <div className='bg-black min-h-screen w-screen'>
      <HashRouter>
        <Parent />
      </HashRouter>
    </div>
    
    </>
  )
}

export default App