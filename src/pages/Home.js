import { Github, Instagram, Mail, Copy } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import headerImage from '../img/headericon.jpg';
import SectionIndicator from '../components/sectionindicator';

const HomePage = () => {
    const [time, setTime] = useState(new Date());
    const controls = useAnimation();

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        controls.set("hidden");
        controls.start("visible");

        return () => {
            clearInterval(timer); // Cleanup on unmount
        };
    }, []);

    const fadeInStagger = {
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12
            }
        },
        hidden: {
            opacity: 0
        }
    };

    const fadeIn = {
        visible: {
            opacity: 1
        },
        hidden: {
            opacity: 0
        }
    };

    const slideLeft = {
        visible: {
            opacity: 1,
            translateX: 0,
            transition: {
                ease: "easeOut"
            }
        },
        hidden: {
            opacity: 0,
            translateX: -50
        }
    };

    const slideRight = {
        visible: {
            opacity: 1,
            translateX: 0,
            transition: {
                ease: "easeOut"
            }
        },
        hidden: {
            opacity: 0,
            translateX: 50
        }
    };

    return (
        <>
            <div className="flex items-center justify-center lg:pl-16">
                <div className="px-5 pt-10 pb-20 justify-center items-center flex max-w-[610px]">
                    <motion.div
                        className="flex flex-col items-center justify-start w-full gap-10"
                        variants={fadeInStagger}
                        initial='hidden'
                        animate={controls}
                    >
                        <div
                            className="flex flex-col items-center self-stretch justify-start gap-4"
                        >
                            <motion.div
                                className="font-mono text-sm font-light h-7 text-cdarkgray"
                                variants={fadeIn}
                            >
                                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                            </motion.div>
                            <motion.img
                                className="w-[72px] h-[72px] rounded-full"
                                src={headerImage}
                                variants={fadeIn}
                            />
                            <motion.div
                                className="flex flex-col items-center self-stretch justify-start gap-5"
                                variants={fadeIn}
                            >
                                <motion.div
                                    className="flex flex-col items-center self-stretch justify-center gap-2"
                                    variants={fadeIn}
                                >
                                    <motion.div
                                        className="text-xl font-light text-white "
                                        variants={fadeIn}
                                    >
                                        Jax Tam
                                    </motion.div>
                                    <motion.div
                                        className="text-lg font-light text-cgray "
                                        variants={fadeIn}
                                    >
                                        Year 1 student at HKU
                                    </motion.div>
                                </motion.div>
                                <motion.div
                                    className="flex items-center justify-start gap-4"
                                    variants={fadeIn}
                                >
                                    <motion.div
                                        className="w-2 h-2 rounded-full bg-cgreen animate-ping"
                                        variants={fadeIn}
                                    ></motion.div>
                                    <motion.div
                                        className="absolute w-2 h-2 rounded-full bg-cgreen"
                                        variants={fadeIn}
                                    ></motion.div>
                                    <motion.div
                                        className="text-base font-light text-cgray"
                                        variants={fadeIn}
                                    >
                                        Available for new opportunities
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                className="flex items-center self-stretch justify-center h-12 gap-5"
                                variants={fadeIn}
                            >
                                <Github className='cursor-pointer text-cdarkgray' onClick={() => window.open('https://github.com/EnhancedJax')} />
                                <Instagram className='cursor-pointer text-cdarkgray' onClick={() => window.open('https://www.instagram.com/enhancedjax/')} />
                            </motion.div>
                            <div
                                className="flex flex-col items-center justify-center w-full gap-2 overflow-x-hidden md:flex-row md:gap-4"
                            >
                                <motion.div
                                    className="self-stretch h-[38px] px-11 py-2 cursor-pointer bg-white rounded-lg justify-center items-center gap-2.5 flex"
                                    variants={slideLeft}
                                    onClick={() => window.open('mailto:tam.lyt@gmail.com')}
                                >
                                    <motion.div
                                        className="text-base font-light text-cbg"
                                        variants={fadeIn}
                                    >
                                        Contact me
                                    </motion.div>
                                    <Mail className='w-5 h-5 text-cdarkgray' />
                                </motion.div>
                                <motion.div
                                    className="font-light text-cgray "
                                    variants={fadeIn}
                                >
                                    or
                                </motion.div>
                                <motion.div
                                    className="self-stretch h-[38px] px-11 py-2 cursor-pointer bg-cfg rounded-lg border border-cborder justify-center items-center gap-2.5 flex"
                                    variants={slideRight}
                                    onClick={() => navigator.clipboard.writeText('tam.lyt@gmail.com')}
                                >
                                    <motion.div
                                        className="text-base font-light text-white"
                                        variants={fadeIn}
                                    >
                                        Copy email
                                    </motion.div>
                                    <Copy className='w-5 h-5 text-cdarkgray' />
                                </motion.div>
                            </div>
                            <div
                                className="self-stretch h-10 p-2.5 flex-col justify-center items-center gap-2.5 flex"
                            >
                                <motion.div
                                    className="font-mono text-sm font-light text-center text-cdarkgray"
                                    variants={fadeIn}
                                >
                                    NT, HK ⋅ 22.2849° N, 114.1376° W
                                </motion.div>
                            </div>
                        </div>
                        <motion.div variants={fadeIn}>
                            <SectionIndicator>About</SectionIndicator>
                            <div
                                className="self-stretch text-base font-light text-gray-200">I'm Jax, a year 1 student studying at The University of Hong Kong.<br /><br />My passion is to deliver clean designs and user-oriented experiences that exceed expectations.<br /><br />I believe my attention to detail and dedication to excellence will allow me to thrive in the future.
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div >
        </>
    );
}

export default HomePage;