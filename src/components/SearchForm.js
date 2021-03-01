import React, {useState} from "react";
import {makeStyles, Button, Grid} from "@material-ui/core";
import { navigate } from "@reach/router"


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

export default function SearchForm(props) {
    const {images, post, posts, addToList} = props
    const classes = useStyles()
    const [image, setImage] = useState(false);
    const [source, setSource] = useState({});
    const [searchValue, setSearchValue] = useState("");
    

    function handleSubmit(event) {
        event.preventDefault();
        addToList({post, img: source.urls.full});
        navigate("/dashboard")
        setImage(false);
        setSource("");

    }

    return (
        <>
        <div className={classes.root}> 
            <form className={classes.form} onSubmit={handleSubmit}>
                <input className={classes.input} placeholder="Type anything..." value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
                <div><Button className={classes.button} variant="contained">Search</Button></div>
            </form>

        </div>
        {/* <div className={classes.gridItem}>
            <Grid container align= "center" alignItems= "center">
                {posts.map(tile => (
                <Grid item xs={4}>
                    <img src={tile.img} height = { 300 } />
                </Grid>
            ))}
            </Grid>
        </div> */}
        
        </>
        

        
    )

} 
