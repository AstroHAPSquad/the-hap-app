import React, {useState} from "react";
import {makeStyles, Button} from "@material-ui/core";

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
    const classes = useStyles()
    const [searchValue, setSearchValue] = useState("");

    function handleSubmit(event) {


    }



    return (
        <div className={classes.root}> 
            <form className={classes.form} onSubmit={handleSubmit}>
                <input className={classes.input} placeholder="Type anything..." value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
                <div><Button className={classes.button} variant="contained">Search</Button></div>
            </form>

        </div>
    )

} 



