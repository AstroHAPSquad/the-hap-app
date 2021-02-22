
import React, {useState} from "react"
import {Typography, Grid, Button, makeStyles} from "@material-ui/core"

const useStyles = makeStyles(() => ({
    root: {
        marginTop: 50,
    },
    gridItem: {
        marginTop: 20,
    }
}))

export default function RandomForm() {
    const classes = useStyles()
    const [image, setImage] = useState(false);

    function handleClick() {
        setImage(true);
    }
    return (
        <div className={classes.root}>
            <Grid container>
            <Grid className={classes.gridItem} item xs={12}>
        { image ? 
        <img src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" height={300}/>
        : null}
        </Grid>
                <Grid className={classes.gridItem} item xs={12}>
        <Button variant="contained" onClick={handleClick}>Generate Random Image!</Button>
        </Grid>

        </Grid>
        </div>
    )
}