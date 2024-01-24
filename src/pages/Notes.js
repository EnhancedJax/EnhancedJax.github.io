import React, { useEffect, useState } from 'react';
import TypingText from '../components/typing';
import ThinkingBlock from '../components/thinking';
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
                        <p>{typingIndex >= 2 && <TypingText text={"Personal notes that I wrote for my classes in The University of Hong Kong. \nNote: Made for personal use only. Unmodified re-distribution is allowed. Content for reference only"} timeout="5" onFinish={goNext} />}</p>
                        <div className="search">
                            <input
                                id="outlined-basic"
                                onChange={inputHandler}
                                placeholder="Search by course code"
                                type="text"
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
            <div id="heroImage" />
        </div>
    );
}

export default NotesPage;