import React, {useState, useEffect} from "react";
import {Router} from '@reach/router'
import ImageForm from './components/ImageForm'
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard"
import Home from "./components/Home";
import {data} from "./mockdata/data"


function App() {
  const [images, setImages] = useState(data.images);
  const [raw, setRaw] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/random/?count=50&&client_id=FHquU1-Nh6BqvwVQu0FwBeXjBXd32mG8ACabjjMoRrU`, {method: "GET"})
.then(data => data.json())
.then(response => {
  setPosts(prev => response.map(item => {
    const id = item.id
    const title = item.user.name
    const subtitle = item.location.name
    const img = item.urls.full 
    console.log(item, img)
    return {id, title, subtitle, img}
  }))
})
},[setPosts])

  // function filterData(item) {
  //   const id = item.id
  //   const title = item.user.name
  //   const subtitle = item.location.name
  //   const img = item.urls.full 
  //   console.log(item, img)
  //   return {id, title, subtitle, img}
  // }

  function addToList(newPost) {
    setPosts([newPost, ...posts])
}

  
  return (
    <div style={{marginBottom: 100}}>
        <NavBar/>
        <Router>
          <Home path="/" images={images}/>
        <ImageForm path="/newpost" images={images} posts={posts} addToList={addToList}/>
        <Dashboard path="/dashboard" posts={posts}/>
        </Router>
    </div>
  );
}

export default App;
