import React, { useEffect, useState } from 'react';
import TypingText from '../components/typing';
import ThinkingBlock from '../components/thinking';
// import { HashLink as Link } from 'react-router-hash-link';

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
                            <p><TypingText text={"I'm Jax, an"} onFinish={goNext} /></p>
                            <h1><span>{typingIndex >= 1 && <TypingText text={"Aspiring student"} onFinish={goNext} />}</span>{typingIndex >= 2 && <TypingText text={", based in Hong Kong"} onFinish={goNext} />}</h1>
                        </div>
                        <p>{typingIndex >= 3 && <TypingText text={"Currently studying for my Engineering degree in Computer Science. Likes anything web as well as UI / UX design. Feel free to contact me for anything!"} timeout={10} onFinish={goNext} />}</p>
                        {/* <Link class="hero_button button" to="/#home">contact me.</Link> */}
                    </>
                )}
                <div id="heroImage" />
            </div>
            <div class="full" id="work">
                <h1>work.</h1>
                <p>Work in progress.</p>
            </div>
            <div class="full" id="contact">
                <h1>contact me.</h1>
                <p>enhanjax@connect.hku.hk</p>
            </div>
        </div>
    );
}

export default HomePage;