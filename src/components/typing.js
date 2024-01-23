import React, { useEffect, useState } from 'react';


function TypingText({ text, timeout = 20, onFinish = () => { } }) {
    const [charsToShow, setCharsToShow] = useState(0);
    useEffect(() => {
        if (text.length === charsToShow) {
            onFinish();
            return;
        };

        setTimeout(() => setCharsToShow(n => n + 1), timeout);
    }, [charsToShow]);


    return (<>{text.substring(0, charsToShow)}{text.length === charsToShow ? "" : "|"}</>)
}

export default TypingText;