import React, {useState, useEffect} from "react"
import {Typography, Grid, Button, makeStyles} from "@material-ui/core"
import {data} from "../mockdata/data"
import { navigate } from "@reach/router"

// const unsplash = new Unsplash({
//     accessKey: "FHquU1-Nh6BqvwVQu0FwBeXjBXd32mG8ACabjjMoRrU",
// })

const useStyles = makeStyles(() => ({
    root: {
        marginTop: 20,
    },
    gridItem: {
        marginTop: 20,
    },
    submit: {
        backgroundColor: "#eb2a3a",
        color: "black",
        '&:hover': {
            backgroundColor: "#c40e1d",
        },
    }
}))

export default function RandomForm(props) {
    const {images, post, posts, addToList} = props
    const classes = useStyles()
    const [image, setImage] = useState(false);
    const [source, setSource] = useState({});



        useEffect(() => {
        fetch(`https://api.unsplash.com/photos/random/?client_id=FHquU1-Nh6BqvwVQu0FwBeXjBXd32mG8ACabjjMoRrU`, {method: "GET"})
  .then(data => data.json())
  .then(response => setSource(response))
    },[setSource])


    function handleRandom() {
        setImage(true);
        console.log(source);
    }
    function handleSubmit(event) {
        event.preventDefault();
        addToList({post, img: source.urls.full});
        navigate("/dashboard")
        setImage(false);
        setSource("");

    }
    return (
        <div className={classes.root}>
            <Grid container>
            <Grid className={classes.gridItem} item xs={12}>
        { image ? 
        <img src={source.urls && source.urls.full} height={300}/>
        : null}
        </Grid>
                <Grid className={classes.gridItem} item xs={12}>
        <Button variant="contained" onClick={handleRandom}>Generate Random Image!</Button>
        </Grid>
        {image ? 
        <Grid className={classes.gridItem} item xs={12}>
        <Button variant="contained" className={classes.submit} onClick={handleSubmit}>Submit</Button>
        </Grid>
        : null}

        </Grid>
        </div>
    )
}