import React from'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home/home'
import History from './components/History/history'
import Experiences from './components/Experiences/experiences'
import Interestings from './components/Interestings/interestings'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import './App.css'


const App = () => {   
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} > </Route>
                <Route path="/History" element={<History />} > </Route>
                <Route path="/Experiences" element={<Experiences />} > </Route>
                <Route path="/Interestings" element={<Interestings />} > </Route>
            </Routes>
            <Footer />
        </Router>
        
    )
}

export default App