import  { Routes, Route  } from "react-router-dom";
import {Suspense, lazy} from "react";
import { Header } from './components/Header'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer.tsx";

const Home =lazy(()=> import( "./pages/Home.tsx"))
const Gallery =lazy(()=> import( "./pages/Gallery.tsx"))
const ImagesPage = lazy(()=> import("./pages/ImagesPage.tsx"))
const About = lazy(()=> import("./pages/About.tsx"))
const Contact = lazy(()=> import("./pages/Contact.tsx"))

function App() {

  return (
    <>
      <Suspense fallback={<h6>Loading...</h6>}>
          <Routes>
            <Route path = "/" element = {
              <div>
                <Header/>
                <Home/>
              </div>
            }/>
            <Route path="gallary" element = {<Gallery/>}/>
            <Route path="about"  element = {<About/>}/>
            <Route path="contact"  element = {<Contact/>}/>
            <Route path="images/:title" element={<ImagesPage/>}/>
          </Routes>
        <Footer/>

      </Suspense>

    </>
  )
}

export default App
