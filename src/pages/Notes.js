import React, { useState } from 'react';
import TextField from "@mui/material/TextField";
import List from "../components/list";

function NotesPage() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div className="main">
            <h1>LaTeX notes</h1>
            <p>Click on a course to see the notes.</p>
            <div className="search">
                <TextField
                    id="outlined-basic"
                    onChange={inputHandler}
                    variant="outlined"
                    fullWidth
                    label="Search by course code"
                />
            </div>
            <List input={inputText} />
        </div>
    );
}

export default NotesPage;