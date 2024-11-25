import React, { Routes, Route  } from "react-router-dom";
import {Suspense, lazy} from "react";
import { Header } from './Header'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home =lazy(()=> import( "./Home"))
const Gallery =lazy(()=> import( "./Gallery"))
const ImagesPage = lazy(()=> import("./ImagesPage.tsx"))
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
          <Route path="images/:title" element={<ImagesPage/>}/>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
