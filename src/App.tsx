import { Routes, Route, useNavigate  } from "react-router-dom";

import { Home } from './Home'
import { Header } from './Header'
import { Gallery } from "./Gallery";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path="gallary" element = {<Gallery/>}/>
    </Routes>

    </>
  )
}

export default App
