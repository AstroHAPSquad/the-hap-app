import React, {useState} from "react";
import {Typography, Button, makeStyles, Grid} from "@material-ui/core";
import { navigate } from "@reach/router";
import RandomForm from "./RandomForm"

const useStyles = makeStyles(() => ({
    root: { 
        textAlign: "center",
        marginTop: 50,
    },
    button: {
        padding: 10,
        margin: 10,
        color: "red",
        alignSelf: "center",
    },
    input: {
        padding: 10,
        margin: 10,
        width: "50%",
    }
}))

export default function ImageForm(props) {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [random, setRandom] = useState(false);
    const [search, setSearch] = useState(false);
    const [list, setList] = useState([]);
    const classes = useStyles();
    
    // function handleSubmit(event) {
    //     event.preventDefault();
    //     addToList({id: String(Math.random()*1000+100), title, subtitle, src});
    //     setTitle("");
    //     setSubtitle("");
    // }
    // function addToList(newItem) {
    //     setList([newItem, ...list])
    // }
    function handleRandom() {
        setSearch(false);
        setRandom(true);
    }
    function handleSearch() {
        setRandom(false);
        setSearch(true);
    }
    

    return (
        <div className={classes.root}>
            <Grid direction="row" justify="center" alignItem="center">
                <Grid item xs={12}><Typography variant="h2">New Post</Typography></Grid>
                <Grid item xs = {12}><input className={classes.input} placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)}/></Grid>
                <Grid item xs={12}><input className={classes.input} placeholder="Subtitle" value={subtitle} onChange={(event) => setSubtitle(event.target.value)}/></Grid>
                <Grid item xs={12}>
                    <Button variant="contained" className={classes.button} onClick={handleRandom}>Random</Button>
                    <Button variant="contained" className={classes.button} onClick={handleSearch}>Search</Button>
                    </Grid>
            </Grid>
            <div>
                { random ? 
                    <RandomForm/>
                : search ? 
                    <Typography>Search</Typography>
                : null
            }
            </div>
            <div>
                {list.map((item) => 
                    <>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                    </>
                )}
            </div>
        </div>
    )
}