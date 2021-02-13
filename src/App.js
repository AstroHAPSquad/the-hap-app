import React from "react";
import './App.css';
import ImageForm from './components/ImageForm'
import {Navbar} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar className="header">
        <h1 className="text">The H A P</h1>
        </Navbar>
      <ImageForm/>
    </div>
  );
}

export default App;
