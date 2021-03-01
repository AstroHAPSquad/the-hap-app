import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import {data} from "../mockdata/data"
 
// work on styles, then work on hovering feature, then work on having the image be coming just from the mockdata


 const useStyles = makeStyles(theme => ({
  root: {
    padding: 60,
    paddingTop: 40
  },
  grid: {
    width: 500,
    height: 450,

  }
}));
export default function Dashboard(props) {
  const classes = useStyles();
  const {posts} = props;
  return (
    <>
    <div style={{display: "flex", justifyContent: "center", paddingTop: 20}}>
    <h1>Dashboard</h1>
    </div>
    <div className={classes.root}>
      <Grid container align= "center" alignItems= "center" spacing = {9}>
          {posts.map(tile => (
            <Grid item xs={4}>
              <img src={tile.img} height = { 400 } />
            </Grid>
        ))}
      </Grid>
    </div>
    </>
  );
} 


