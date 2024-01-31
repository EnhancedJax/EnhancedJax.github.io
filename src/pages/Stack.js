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
            <div className="flex items-center justify-center lg:pl-16">
                <div className="px-5 pt-10 pb-20 justify-center items-center inline-flex w-full max-w-[610px]">
                    <motion.div
                        className="flex flex-col w-full gap-10"
                        variants={fadeInStagger}
                        initial="hidden"
                        animate={controls}
                    >
                        <div className="flex flex-col items-start justify-center gap-2 pl-3">
                            <motion.div variants={fadeIn} className="text-xl font-light text-white">Stack</motion.div>
                            <motion.div variants={fadeIn} className="text-lg font-light text-cgray">Software products that I use</motion.div>
                        </div>
                        <motion.div variants={fadeIn}>
                            <SectionIndicator>Software</SectionIndicator>
                            <div className="flex flex-wrap gap-3">
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
            <div className="flex flex-col items-start justify-center gap-2">
                <div className="p-1.5 rounded-md border border-cborder justify-center items-start inline-flex">
                    <div className="text-xs font-light text-cgray">{type}</div>
                </div>
                <div className="text-base font-light text-white">{name}</div>
            </div>
        </div >
    )
}

export default StackPage;