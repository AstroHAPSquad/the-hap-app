import React, {useState} from "react"
import {Typography, Grid, Button, makeStyles} from "@material-ui/core"
import {data} from "../mockdata/data"
import { navigate } from "@reach/router"

const useStyles = makeStyles(() => ({
    root: {
        marginTop: 50,
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
    const {images} = props
    const classes = useStyles()
    const [image, setImage] = useState(false);
    const [source, setSource] = useState(null);

    function handleRandom() {
        setImage(true);
        setSource(images[Math.floor(Math.random()*images.length)].src2)
        console.log(source);
    }
    function handleSubmit() {
        navigate("/dashboard")
    }
    return (
        <div className={classes.root}>
            <Grid container>
            <Grid className={classes.gridItem} item xs={12}>
        { image ? 
        <img src={source} height={300}/>
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