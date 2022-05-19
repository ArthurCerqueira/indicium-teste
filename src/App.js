import React from'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home/home'
import History from './components/History/history'
import Experiences from './components/Experiences/experiences'
import Interests from './components/Interests/interests'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import GlobalStyle from './assets/styles/global'
import Container from './components/Container/Container'


const App = () => {   
    return (
        <>
            <GlobalStyle />
            <Router>
                <Navbar />
                <Container>
                    <Routes>
                        <Route exact path="/" element={<Home />} /> 
                        <Route path="/History" element={<History />} />
                        <Route path="/Experiences" element={<Experiences />} /> 
                        <Route path="/Interests"  element={<Interests />} /> 
                    </Routes>
                </Container>
                <Footer />
            </Router> 
        </>
    )
}

export default App