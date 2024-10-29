import { useEffect, useState } from 'react'
import { Routes, Route} from 'react-router-dom'

import './App.css'
import Blogs from './Pages/Blogs/Blogs.jsx'
import HomePage from './Pages/HomePage.jsx'
import NavBar from './Layout/Navbar/Navbar.jsx'
import Footer from './Layout/Footer/Footer.jsx'

function App() {
  // tailwinds presets to small screens but for medium screens use md: and for large lg:
  return (
    <>
    <main className='bg-white h-screen'>

      {/* <h1 className='text-3xl text-white p-7 font-sans'>CapStone Project</h1>

      <div className='bg-slate-400 flex'>
        <div className=' bg-green-800'>1</div>
        <div className='w-80 text-center p-5'>2</div>
        <div>3</div>
      </div>
      <div className='bg-red-500 text-center  p-10 rounded-full border-4 hover:bg-yellow-400 hover:cursor-pointer'>
        <div className='text-4xl font-bold'>App Stone</div>
      </div> */}
      {/* <HomePage /> */}
      <NavBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blogs' element={<Blogs />} />
      </Routes>

      <Footer />

    </main>
    
    </>
  )
}

export default App
