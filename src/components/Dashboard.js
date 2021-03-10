import React, {useState, useEffect} from 'react';
import { makeStyles, Grid, Button } from '@material-ui/core';
import Slideshow from "./Slideshow";
import PostModal from "./PostModal";

 const useStyles = makeStyles(theme => ({
  root: {
    // padding: 60,
    // paddingTop: 40,
  },
  grid: {
    width: 500,
    height: 450,
  },
  button: {
    marginLeft: 10,
    marginBottom: 20,
    marginTop: 10,
    color: "red",
  }
}));
export default function Dashboard(props) {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [slide, setSlide] = useState(false);
  // const [postId, setPostId] = useState("");
  const [open, setOpen] = useState(false)
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/random/?count=50&&orientation=squarish&&client_id=FHquU1-Nh6BqvwVQu0FwBeXjBXd32mG8ACabjjMoRrU`, {method: "GET"})
.then(data => data.json())
.then(response => {
  setPosts(prev => response.map(item => {
    const id = item.id
    const title = item.user.name
    const subtitle = item.location.name
    const img = item.urls.full 
    return {...item, id, title, subtitle, img}
  }))
})
},[setPosts])
console.log(posts);

  function displayPostModal(postId) {
    // setPostId(postId);
    setOpen(true);
    setPost(prevState => {
      const found = posts.find(item => item.id == postId);
      return found
    })
    console.log(postId);
  }
  function handleModalClose() {
    setOpen(false);
  }
  
  
  return (
    <>
    <div style={{display: "flex", justifyContent: "center", fontFamily: "Raleway",
        textDecorationStyle: "solid",
        textDecorationLine: "none", }}>
    <h1>Dashboard</h1>
    </div>
    <div className={classes.root}>
    <Button className={classes.button} variant="contained" onClick={() => setSlide(false)}>Grid</Button>
    <Button className={classes.button} variant="contained" onClick={() => setSlide(true)}>Slideshow</Button>
       {slide ? 
       <Slideshow posts={posts}/>
       : (
       <Grid container align= "center" alignItems= "center">
           {posts.map(post => (
             <Grid item xs={4} key={post.id} onClick={() => displayPostModal(post.id)}>
               <img src={post.img} alt={post.id} height = { 400 }/>
             </Grid>
         ))}
       </Grid>
       )}
    </div>
    <PostModal open={open} post={post} handleModalClose={handleModalClose}/>
    </>

  );
} 






