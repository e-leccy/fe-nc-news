import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import SingleArticle from './components/SingleArticle'

function App() {


  return (
    <>
      <NavBar/>
      <Routes>
       <Route path="/" element={<HomePage/>} />
       <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
      
    </>
  )
}

export default App
