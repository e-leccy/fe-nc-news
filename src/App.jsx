import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import SingleArticle from './components/SingleArticle'
import Header from './components/Header'
import { UserAccountProvider } from './components/UserAccount'
import UserLoginForm from './components/UserLoginForm'

function App() {

  return (
    <>
    <UserAccountProvider>
      <Header />
      <NavBar/>
      <Routes>
       <Route path="/" element={<HomePage/>} />
       <Route path="/articles/:article_id" element={<SingleArticle />} />
       <Route path="/login" element={<UserLoginForm/>} />
      </Routes>
    </UserAccountProvider>
    </>
  )
}


export default App
