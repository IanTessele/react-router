import './Content.css'
import React from "react";
import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import NotFound from '../../views/examples/NotFound';
import BoxTest from '../../views/examples/BoxTest'
import { Routes , Route } from 'react-router-dom'

const Content = props => {
    return (
        <main className="Content">
            <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/box' element={<BoxTest />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </main>
    );
}

export default Content;
