import React, {useState} from 'react';
import { makeStyles, Grid, Button } from '@material-ui/core';
import Slideshow from "./Slideshow";
import PostModal from "./PostModal";
import {navigate} from "@reach/router";

 
// work on styles, then work on hovering feature, then work on having the image be coming just from the mockdata


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
  const {posts} = props;
  const [slide, setSlide] = useState(false);
  const [postId, setPostId] = useState("");
  const [open, setOpen] = useState(false)

  function displayPostModal(postId) {
    setPostId(postId);
    setOpen(true);
    // navigate(`/dashboard/${postId}`);
  }
  function handleModalClose() {
    setOpen(false);
    setPostId("");
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
             <Grid item xs={4} onClick={() => displayPostModal(post.id)}>
               <img src={post.img} alt={post.id} height = { 400 }/>
             </Grid>
         ))}
       </Grid>
       )}
    </div>
    <PostModal post={posts.filter(p => p.id == postId)} open={open} handleModalClose={handleModalClose}/>
    </>
  );
} 

// import React, {useState} from 'react';
// import { makeStyles, Grid, Button } from '@material-ui/core';
// import Slideshow from "./Slideshow";

 
// // work on styles, then work on hovering feature, then work on having the image be coming just from the mockdata


//  const useStyles = makeStyles(theme => ({
//   root: {
//     marginTop: 20,
//   },
//   grid: {
//     marginTop: 20,
//     width: 500,
//     height: 450
//   }
// }));
// export default function Dashboard(props) {
//   const classes = useStyles();
//   const {posts} = props;
//   const [slide, setSlide] = useState(false);


//   return (
//     <div className={classes.root}>
//       <Button onClick={() => setSlide(false)}>Grid</Button>
//       <Button onClick={() => setSlide(true)}>Slideshow</Button>
//       {slide ? 
//       <Slideshow posts={posts}/>
//       : (
//       <Grid container align= "center" alignItems= "center">
//           {posts.map(tile => (
//             <Grid item xs={4}>
//               <img src={tile.img} height = { 400 } />
//             </Grid>
//         ))}
//       </Grid>
//       )}
//     </div>
//   );
// } 





