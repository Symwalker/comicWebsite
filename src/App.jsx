import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ResponsiveAppBar from './muiComponents/Navbar/Navbar';
import MuiMenu from './muiComponents/Navbar/Navbar';

const App = () => {
    return (
        <>
        <MuiMenu/>
        {/* <ResponsiveAppBar/> */}
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                {/* and more pages you ant to make */}
            </Routes>
        </>
    )
}

export default App
