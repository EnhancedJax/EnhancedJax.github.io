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
            <div className="flex justify-center items-center lg:pl-16">
                <div className="px-5 pt-10 pb-20 justify-center items-center flex max-w-[610px]">
                    <motion.div
                        className="w-full flex-col justify-start items-center gap-10 flex"
                        variants={fadeInStagger}
                        initial='hidden'
                        animate={controls}
                    >
                        <div
                            className="self-stretch flex-col justify-start items-center gap-4 flex"
                        >
                            <motion.div
                                className="h-7 text-cdarkgray text-sm font-light font-mono"
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
                                className="self-stretch flex-col justify-start items-center gap-5 flex"
                                variants={fadeIn}
                            >
                                <motion.div
                                    className="self-stretch flex-col justify-center items-center gap-2 flex"
                                    variants={fadeIn}
                                >
                                    <motion.div
                                        className="text-white text-xl font-light "
                                        variants={fadeIn}
                                    >
                                        Jax Tam
                                    </motion.div>
                                    <motion.div
                                        className="text-cgray text-lg font-light "
                                        variants={fadeIn}
                                    >
                                        Year 1 student at HKU
                                    </motion.div>
                                </motion.div>
                                <motion.div
                                    className="justify-start items-center gap-4 flex"
                                    variants={fadeIn}
                                >
                                    <motion.div
                                        className="w-2 h-2 bg-cgreen rounded-full animate-ping"
                                        variants={fadeIn}
                                    ></motion.div>
                                    <motion.div
                                        className="w-2 h-2 bg-cgreen rounded-full absolute"
                                        variants={fadeIn}
                                    ></motion.div>
                                    <motion.div
                                        className="text-cgray font-light text-base"
                                        variants={fadeIn}
                                    >
                                        Available for new opportunities
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                className="self-stretch h-12 justify-center items-center gap-5 flex"
                                variants={fadeIn}
                            >
                                <Github className='text-cdarkgray' />
                                <Instagram className='text-cdarkgray' />
                            </motion.div>
                            <div
                                className="w-full flex-col justify-center items-center gap-2 flex md:flex-row md:gap-4 overflow-x-hidden"
                            >
                                <motion.div
                                    className="self-stretch h-[38px] px-11 py-2 bg-white rounded-lg justify-center items-center gap-2.5 flex"
                                    variants={slideLeft}
                                >
                                    <motion.div
                                        className="text-cbg font-light text-base"
                                        variants={fadeIn}
                                    >
                                        Contact me
                                    </motion.div>
                                    <Mail className='text-cdarkgray w-5 h-5' />
                                </motion.div>
                                <motion.div
                                    className="text-cgray font-light "
                                    variants={fadeIn}
                                >
                                    or
                                </motion.div>
                                <motion.div
                                    className="self-stretch h-[38px] px-11 py-2 bg-cfg rounded-lg border border-cborder justify-center items-center gap-2.5 flex"
                                    variants={slideRight}
                                >
                                    <motion.div
                                        className="text-white font-light text-base"
                                        variants={fadeIn}
                                    >
                                        Copy email
                                    </motion.div>
                                    <Copy className='text-cdarkgray w-5 h-5' />
                                </motion.div>
                            </div>
                            <div
                                className="self-stretch h-10 p-2.5 flex-col justify-center items-center gap-2.5 flex"
                            >
                                <motion.div
                                    className="text-cdarkgray text-sm font-light font-mono text-center"
                                    variants={fadeIn}
                                >
                                    NT, HK ⋅ 22.2849° N, 114.1376° W
                                </motion.div>
                            </div>
                        </div>
                        <motion.div variants={fadeIn}>
                            <SectionIndicator>About</SectionIndicator>
                            <div
                                className="self-stretch text-gray-200 font-light text-base">I'm Jax, a year 1 student studying at The University of Hong Kong.<br /><br />My passion is to deliver clean designs and user-oriented experiences that exceed expectations.<br /><br />I believe my attention to detail and dedication to excellence will allow me to thrive in the future.
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div >
        </>
    );
}

export default HomePage;