import React from "react";
import {Router} from '@reach/router'
import ImageForm from './components/ImageForm'
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard"
import Home from "./components/Home";

function App() {
  return (
    <div style={{marginBottom: 100}}>
        <NavBar/>
        <Router>
          <Home path="/"/>
        <ImageForm path="/newpost"/>
        <Dashboard path="/dashboard"/>
        </Router>
    </div>
  );
}

export default App;
