import React, { Component } from "react";
import { Header, Container, Footer } from "./links"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"


import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

class App extends Component {
    render () {
        return (
            <>
                <Router basename={"/react"}>
                <Header />
                    <Container>
                        <Routes>
                            <Route path="/" element={ <Home /> } />
                            <Route path="/Profile" element={<Profile /> } />
                        </Routes>
                  </Container>
                 <Footer/>
                </Router>
                
            </>
        )
    }
}

export default App