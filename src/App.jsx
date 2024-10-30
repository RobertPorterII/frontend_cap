import { useEffect, useState } from 'react'
import { Routes, Route} from 'react-router-dom'

import './App.css'
import Blogs from './Pages/Blogs/Blogs.jsx'
import BlogPage from './Pages/Blogs/Blogs.jsx'
import HomePage from './Pages/HomePage.jsx'
import NavBar from './Layout/Navbar/Navbar.jsx'
import Footer from './Layout/Footer/Footer.jsx'
import { AnimeInfo } from './Components/SearchPage/Animeinfo.jsx'
import { AnimeList } from './Components/SearchPage/AnimeList.jsx'
import TopPage from './Pages/TopPage.jsx'
import SearchPage from './Components/SearchPage/Search.jsx'
import Content from './Components/Content.jsx'

function App() {

  // moved all files related to Search engine to own folded
// Usestate variables for Search engine will be empty string so the search engineis blank on render
// const [search, setSearch] = useState("")
// const [animeData, SetAnimeData] = useState()
// const [animeInfo, setAnimeInfo] = useState();


// fetching Anime data for search page
// const fetchAnimeData = async() => {
//   const res = await fetch('https://api.jikan.moe/v4/anime?q=${search}&limit=10')
//   const resData = await res.json();
//   // console.log(resData);  === there for testing now adding teh useSTate variables with it
//   SetAnimeData(resData.data)
// }
// useEffect(() => {
//   fetchAnimeData()
// }, [search])

// useState for teh blogs
  const [blogs, setBlogs] = useState(null);
  
  // fetch all blogs when component first renders
  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/blogs`);
      const blogData = await res.json();
      console.log(blogData);
      setBlogs(blogData.blogs)
      
    }
    fetchBlogs();
  }, []);

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
        <Route path='/blogs' element={<BlogPage blogs={blogs} setBlogs={setBlogs} />} />
        <Route path='/blogs/:id' element={<Content blogs={blogs} setBlogs={setBlogs} />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/top' element={<TopPage />}/>
        
      </Routes>

      <Footer />

    </main>
    
    </>
  )
}

export default App
