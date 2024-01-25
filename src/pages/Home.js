import React, { useEffect, useState } from 'react';
import Type from '../components/typing';
import ThinkingBlock from '../components/thinking';
import PageTransition from '../components/pagetransition';
import BgImg from '../components/bgimg';
import { useIsPresent, motion } from "framer-motion";
// import { HashLink as Link } from 'react-router-hash-link';

const HomePage = () => {
    const [showThinkingBlock, setShowThinkingBlock] = useState(true);
    const [tI, sTI] = useState(0); // typing index
    const isPresent = useIsPresent();
    function goNext() {
        sTI(n => n + 1);
    }

    useEffect(() => {
        setTimeout(() => {
            setShowThinkingBlock(false);
        }, 600);
    }, []);

    return (
        <div id="home">
            <ViewBox section="hero" is_transparent>
                {showThinkingBlock ? <ThinkingBlock /> : (
                    <>
                        <div className='mb-6'>
                            <p><Type t="I'm Jax, an" f={goNext} /></p>
                            <h1><span className='text-highlight'>{tI >= 1 && <Type t="Aspiring student" f={goNext} />}</span>{tI >= 2 && <Type t=", based in Hong Kong" f={goNext} />}</h1>
                        </div>
                        <p>{tI >= 3 && <Type t="Currently studying for my Engineering degree in Computer Science. Likes anything web as well as UI / UX design. Feel free to contact me for anything!" d='10' f={goNext} />}</p>
                    </>
                )}


            </ViewBox>
            <ViewBox section="work">
                <h1>my <span className='text-highlight'>work</span>.</h1>
                <p>Work in progress.</p>
            </ViewBox>
            <ViewBox section="contact">
                <h1><span className='text-highlight'>contact</span> me.</h1>
                <p>enhanjax@connect.hku.hk</p>
            </ViewBox>
            <BgImg />
            <PageTransition state={isPresent} />
        </div>
    );
}

const ViewBox = ({ section, children, is_transparent = false }) => {
    const bgis = is_transparent ? 'transparent' : 'white';

    return (
        <motion.div className={`px-20 h-screen flex flex-col justify-center items-start border-t border-t-neutral-100 bg-${bgis}`} id={section}>
            {children}
        </motion.div>
    )
}

export default HomePage;