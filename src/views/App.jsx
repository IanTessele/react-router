import React from "react";
import './App.css'
import Main from "../components/layouts/Main";
import Content from '../components/layouts/Content'
const App = props => {
  return (
    <div className="App">
        <Main />
        <Content />
    </div>
  );
}

export default App;
