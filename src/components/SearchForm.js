import React, {useState} from "react";
import {Typography} from "@material-ui/core";

export default function SearchForm(props) {
    const [searchValue, setSearchValue] = useState("");


    function handleSubmit(event) {


    }



    return (
        <div> 
            <form onSubmit={handleSubmit}>
                <input placeholder="Type anything..." value={searchValue} onChange={(event) => setSearchValue(event.target.value)}/>
                <button>Search</button>
            </form>

        </div>
    )

} 



