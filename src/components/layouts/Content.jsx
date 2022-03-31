import './Content.css'
import React from "react";
import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import { Routes , Route } from 'react-router-dom'

const Content = props => {
    return (
        <main className="Content">
            <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/Home' element={<Home />} />
            </Routes>
        </main>
    );
}

export default Content;
