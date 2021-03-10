import React, {useState} from 'react';
import { makeStyles, Grid, Button, Popover, Typography } from '@material-ui/core';
import Slideshow from "./Slideshow";
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
  }, 
  popover: {
    pointerEvents: 'none',
  }
}));
export default function Dashboard(props) {
  const classes = useStyles();
  const {posts} = props;
  const [slide, setSlide] = useState(false);
  const [postId, setPostId] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  function handlePopoverOpen(event, postId) {
      setAnchorEl(event.currentTarget)
      setPostId(postId);
    console.log("enter: " + postId);
      console.log("enter");
  }
  function handlePopoverClose() {
      setAnchorEl(null)
      setPostId(null);
      console.log("exit: " + postId);
  }
  // function handleEntering(post) {
  //   setPostId(post.id);
  //   console.log("enter: " + post.id);
  // }

  const open = Boolean(anchorEl);
  
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
             <Grid container key={post.id} xs={4}>
               <div>
               <img src={post.img} alt={post.id} height = { 400 } aria-owns={open ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={(event) => handlePopoverOpen(event, post.id)} 
                        onMouseLeave={handlePopoverClose}/>
               <Popover
                                id="mouse-over-popover"
                                className={classes.popover}
                                open={open}
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                vertical: 'center',
                                horizontal: 'center',
                                }}
                                transformOrigin={{
                                vertical: 'center',
                                horizontal: 'center',
                                }}
                                onClose={handlePopoverClose}
                                elevation={0}

                            >
                                <Typography variant="h4">{post.id == postId ? post.title : null}</Typography>
                            </Popover>
                            </div>
             </Grid>
         ))}
       </Grid>
       )}
    </div>
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





