import React, { useEffect, useState } from 'react';
import TypingText from '../components/typing';
import ThinkingBlock from '../components/thinking';
import TextField from "@mui/material/TextField";
import List from "../components/list";

function NotesPage() {
    const [showThinkingBlock, setShowThinkingBlock] = useState(true);
    const [typingIndex, setTypingIndex] = useState(0);

    function goNext() {
        setTypingIndex(n => n + 1);
    }

    useEffect(() => {
        setTimeout(() => {
            setShowThinkingBlock(false);
        }, 600);
    }, []);

    const [inputText, setInputText] = useState("");

    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div className="fullDouble">
            <div className="fullContainer fullleft">
                {showThinkingBlock ? <ThinkingBlock /> : (
                    <>
                        <h1><TypingText text={"my "} timeout={60} onFinish={goNext} /><span>{typingIndex >= 1 && <TypingText text={"notes."} timeout={60} onFinish={goNext} />}</span></h1>
                        <p>{typingIndex >= 2 && <TypingText text={"Personal notes that I wrote for my classes in The University of Hong Kong. Note: Made for personal use only. Unmodified re-distribution is allowed. Content for reference only"} timeout="10" onFinish={goNext} />}</p>
                        <div className="search">
                            <TextField
                                id="outlined-basic"
                                onChange={inputHandler}
                                variant="outlined"
                                fullWidth
                                label="Search by course code"
                            />
                        </div>
                    </>
                )}
            </div>
            {showThinkingBlock ? "" : (
                <div className="fullContainer fullRight">
                    <List input={inputText} />
                </div>
            )}
        </div>
    );
}

export default NotesPage;