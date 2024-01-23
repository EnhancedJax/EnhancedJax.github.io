import React, { useEffect, useState } from 'react';
import TypingText from '../components/typing';
import ThinkingBlock from '../components/thinking';

const HomePage = () => {
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

    return (
        <div id="home">
            <div class="full" id="hero">
                {showThinkingBlock ? <ThinkingBlock /> : (
                    <>
                        <div id="heroTitle">
                            <p><TypingText text={"I'm Jax, a"} onFinish={goNext} /></p>
                            <h1>{typingIndex >= 1 && <TypingText text={"Creative student, based in Hong Kong"} onFinish={goNext} />}</h1>
                        </div>
                        <p>{typingIndex >= 2 && <TypingText text={"Currently studying for my Engineering degree in Computer Science. Likes anything web as well as UI / UX design. Feel free to contact me for anything!"} timeout={10} onFinish={goNext} />}</p>
                    </>
                )}
            </div>
            <div class="full" id="work">
                <h1>work.</h1>
            </div>
        </div>
    );
}

export default HomePage;