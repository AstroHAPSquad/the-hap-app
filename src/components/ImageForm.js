import React, {useState} from "react";
import {Form, FormControl} from "react-bootstrap"

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
            <h1>Image Form</h1>
            <Form onSubmit={handleSubmit}>
                <input placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)}/>
                <input placeholder="Subtitle" value={subtitle} onChange={(event) => setSubtitle(event.target.value)}/>
                <button>Submit</button>
            </Form>
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