import React, {useState} from "react";
import {Typography} from "@material-ui/core";

export default function ImageForm(props) {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [list, setList] = useState([]);
    
    function handleSubmit(event) {
        event.preventDefault();
        addToList({id: String(Math.random()*1000+100), title, subtitle});
        setTitle("");
        setSubtitle("");
    }
    function addToList(newItem) {
        setList([newItem, ...list])
    }
    

    return (
        <div>
            <Typography variant="h2">Image Form</Typography>
            <form onSubmit={handleSubmit}>
                <input placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)}/>
                <input placeholder="Subtitle" value={subtitle} onChange={(event) => setSubtitle(event.target.value)}/>
                <button>Submit</button>
            </form>
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