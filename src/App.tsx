import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { SyncLoader } from 'react-spinners';
import MainLayout from "./layouts/MainLayout";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Lazy loading the page components
const Home = lazy(() => import("./pages/Home"));
const Gallery = lazy(() => import("./pages/Gallery"));
const ImagesPage = lazy(() => import("./pages/ImagesPage"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
    return (
        <>
            {/* Suspense for lazy loading with a fallback spinner */}
            <Suspense fallback={<div className="spinner"><SyncLoader color="#ffb600" /></div>}>
                <div style={{ minHeight: "100vh" }}>
                    {/* Routing setup with MainLayout as the layout wrapper */}
                    <Routes>
                        {/* Home Route */}
                        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
                        {/* Gallery Route */}
                        <Route path="gallery" element={<MainLayout><Gallery /></MainLayout>} />
                        {/* About Route */}
                        <Route path="about" element={<MainLayout><About /></MainLayout>} />
                        {/* Contact Route */}
                        <Route path="contact" element={<MainLayout><Contact /></MainLayout>} />
                        {/* Dynamic ImagesPage Route */}
                        <Route path="images/:title" element={<MainLayout><ImagesPage /></MainLayout>} />
                        {/* 404 Not Found Routes */}
                        <Route path="/404" element={<NotFound />} />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </div>
            </Suspense>
        </>
    );
}

export default App;
