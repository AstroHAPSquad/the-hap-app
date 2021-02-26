import React from "react"
import {Link } from "@reach/router"
import {Toolbar, makeStyles, Grid} from "@material-ui/core"

const useStyles = makeStyles(() => ({
    nav: {
        display: "flex", 
        justifyContent: "space-evenly",
        backgroundColor: "red",
        height: 60,
    },
    businessName: {
        fontFamily: "Raleway",
        fontSize: 50,
        color: "black",
        textDecorationLine: "none",
    },
    navItem: {
        fontFamily: "Raleway",
        fontSize: 20,
        color: "white",
        textDecorationStyle: "solid",
        textDecorationLine: "none",

    }
}))

export default function NavBar() {
    const classes = useStyles()
    
    return (
        <Toolbar className={classes.nav}>
            <Grid container align="center" alignItems="center">
                <Grid item xs={4}>
                <Link to="/newpost" className={classes.navItem}>Create New Post</Link>
                </Grid>
                <Grid item xs={4}>
                <Link to="/" className={classes.businessName}>The H A P</Link>
                </Grid>
                <Grid item xs={4}>
                <Link to="/dashboard" className={classes.navItem}>Dashboard</Link>
                </Grid>
        
        
        
        
        </Grid>
        </Toolbar>
    )
}
