import React, {useState} from "react";
import {Router} from '@reach/router'
import ImageForm from './components/ImageForm'
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard"
import Home from "./components/Home";
import {data} from "./mockdata/data"

function App() {
  const [images, setImages] = useState(data.images);
  
  return (
    <div style={{marginBottom: 100}}>
        <NavBar/>
        <Router>
          <Home path="/"/>
        <ImageForm path="/newpost" images={images}/>
        <Dashboard path="/dashboard"/>
        </Router>
    </div>
  );
}

export default App;
