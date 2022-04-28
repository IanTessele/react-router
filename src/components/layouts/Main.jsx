import React from "react";
import { Link } from "react-router-dom";
import './Main.css'

const Main = props => {
    return (
        <aside className="Main">
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/box">Box Teste</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Main;
