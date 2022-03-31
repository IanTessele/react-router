import React from "react";
import './App.css';
import Main from "../components/layouts/Main";
import Content from '../components/layouts/Content';
import { BrowserRouter as Router } from 'react-router-dom';

const App = props => {
  return (
    <div className="App">
      <Router>
        <Main />
        <Content />
      </Router>
    </div>
  );
}

export default App;
