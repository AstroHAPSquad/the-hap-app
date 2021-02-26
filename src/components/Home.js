import React from "react"
import {Typography, Button, Grid, makeStyles} from "@material-ui/core"
import {navigate} from "@reach/router"
import Slideshow from "./Slideshow"



export default function Home(props) {
    const {images} = props
    function handleClick(event) {
        navigate(`/newpost`)
    }
    
    
    return(
        <>
        <div style={{display: "flex", justifyContent: "center", paddingTop: 200}}>
            <Typography variant="h1" >Welcome to the H A P</Typography>
        </div>
        <div style={{display: "flex", justifyContent: "center", marginTop: 20}}>
        <Button variant="contained" onClick={(event) => handleClick(event.target.value)}>Get Started</Button>
        </div>
        <div><Slideshow images={images}/></div>

        </>
    )
}