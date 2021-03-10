import React, {useState, useEffect} from "react"
import {Modal, Typography, Button, makeStyles, CircularProgress} from "@material-ui/core"


const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flex: 1,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "15%",
        marginLeft: "15%",
        width: "50%",
        height: "50%",
        backgroundColor: "blue",
        opacity: "100%",
    }
}))

export default function PostModal(props) {
    const classes = useStyles();
    const {postId, post, open, handleModalClose} = props

    // useEffect(() => {
    //     setPost(prevState => {
    //         const found = posts.find(item => item.id == postId)
    //         return found
    //     })
    // }, [])
    
    if (!post) {
        return <h1>...loading</h1>
    } else {
    
    return (
            <Modal
        open={open}
        onClose={handleModalClose}
        className={classes.root}
        >
                <Typography variant="h1">Hello</Typography>
                    <Typography>{post.title}</Typography>
                    <Typography>{post.subtitle}</Typography>
                    <img src={post.img}/>
        </Modal>
        )
    }
}