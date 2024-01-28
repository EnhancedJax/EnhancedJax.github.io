import React, { useEffect, useState, Children } from 'react';

function Type({ t, d = 20, f = () => { } }) {
    const [charsToShow, setCharsToShow] = useState(0);

    useEffect(() => {
        if (t.length === charsToShow) {
            f();
            return;
        };

        setTimeout(() => setCharsToShow(n => n + 1), d);
    }, [charsToShow]);


    return (<>{t.substring(0, charsToShow)}</>)
}

export default Type;

