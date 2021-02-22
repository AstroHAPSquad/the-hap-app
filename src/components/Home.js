import React from "react"
import {Typography, Button, Grid, makeStyles} from "@material-ui/core"
import {navigate} from "@reach/router"
import {data} from "../mockdata/data"


export default function Home() {

    function handleClick(event) {
        navigate(`/newpost`)
    }
    
    
    return(
        <>
        <div style={{display: "flex", justifyContent: "center", paddingTop: 200}}>
            <Typography variant="h1" >Welcome to the H A P</Typography>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
        <Button variant="contained" onClick={(event) => handleClick(event.target.value)}>Get Started</Button>
        </div>

        </>
    )
}