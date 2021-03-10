import React, {useState} from 'react';
import { makeStyles, Grid, Button, Popover, Typography } from '@material-ui/core';
import Slideshow from "./Slideshow";


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
  },
  popoverText: {
    fontFamily: "Raleway",
  }
}));
export default function Dashboard(props) {
  const classes = useStyles();
  const {posts} = props;
  const [slide, setSlide] = useState(false);
  const [postId, setPostId] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  function handlePopoverOpen(event, postId) {
      setAnchorEl(event.currentTarget)
      setPostId(postId);
      setOpen(true);
    console.log("enter: " + postId);
      console.log("enter");
  }
  function handlePopoverClose() {
      setAnchorEl(null)
      setPostId(null);
      setOpen(false);
      console.log("exit: " + postId);
  }
  
  return (
    <>
    <div style={{display: "flex", justifyContent: "center", fontFamily: "Raleway",
        textDecorationStyle: "solid",
        textDecorationLine: "none", }}>
    <Typography variant="h2" style={{fontFamily: "Raleway", marginTop: 40,}}>Dashboard</Typography>
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
                        {post.id == postId && post.title ? (
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
                          <Typography variant="h4" className={classes.popoverText}>{post.title}</Typography>
                          <Typography variant="h6" className={classes.popoverText}>{post.subtitle}</Typography>
                      </Popover>
                        ) : null}
                            </div>
             </Grid>
         ))}
       </Grid>
       )}
    </div>
    </>
  );
} 






