import React, { useState, useEffect } from 'react';
import SectionIndicator from '../components/sectionindicator';
import { motion, useAnimation } from "framer-motion";

const StackPage = () => {
    const controls = useAnimation();

    useEffect(() => {

        controls.set("hidden");
        controls.start("visible");

    }, []);

    const fadeInStagger = {
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
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

    return (
        <>
            <div className="flex justify-center items-center lg:pl-16">
                <div className="px-5 pt-10 pb-20 justify-center items-center inline-flex w-full max-w-[610px]">
                    <motion.div
                        className="w-full flex-col gap-10 flex"
                        variants={fadeInStagger}
                        initial="hidden"
                        animate={controls}
                    >
                        <div className="pl-3 flex-col justify-center items-start gap-2 flex">
                            <motion.div variants={fadeIn} className="text-white text-xl font-light">Stack</motion.div>
                            <motion.div variants={fadeIn} className="text-cgray text-lg font-light">Software products that I use</motion.div>
                        </div>
                        <motion.div variants={fadeIn}>
                            <SectionIndicator>Software</SectionIndicator>
                            <div className="flex gap-3 flex-wrap">
                                <StackItem name="Arc" type="BROWSER" icon="arc" />
                                <StackItem name="Notion" type="PRODUCTIVITY" icon="notion" />
                                <StackItem name="Spotify" type="MUSIC" icon="spotify" />
                                <StackItem name="VSCode" type="CODE" icon="vscode" />
                                <StackItem name="Github Copilot" type="AI" icon="copliot" />
                                <StackItem name="iTerm2" type="TERMINAL" icon="iterm2" />

                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

const StackItem = ({ name, type, icon }) => {
    return (
        <div className="basis-[140px] grow h-[230px] p-3 bg-cfg rounded-lg flex-col gap-2.5 flex">
            <div className="justify-center items-center gap-2.5 flex w-full h-full">
                <img className="w-[72px]" src={`./img/${icon}.webp`} />
            </div>
            <div className="flex-col justify-center items-start gap-2 flex">
                <div className="p-1.5 rounded-md border border-cborder justify-center items-start inline-flex">
                    <div className="text-cgray text-xs font-light">{type}</div>
                </div>
                <div className="text-white font-light text-base">{name}</div>
            </div>
        </div >
    )
}

export default StackPage;