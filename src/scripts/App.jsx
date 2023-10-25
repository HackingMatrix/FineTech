
import '../App.css'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Multi from '../components/Multi'
import Thx from '../components/Thx'
import Hero2 from '../components/Hero2'
import Register from '../components/Register'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Hero2/>} />
        <Route exact path="/registro" element={ <Register/>} />
        <Route exact path="/thx" element={ <Thx/>} />
    </Routes></BrowserRouter>
    </>
  )
}



export default App
