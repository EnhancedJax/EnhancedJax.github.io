import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import SectionIndicator from '../components/sectionindicator';

const WorkPage = () => {
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
                <div className="px-5 pt-10 pb-20 justify-center items-center inline-flex max-w-[610px]">
                    <motion.div
                        className="inline-flex flex-col items-center self-stretch justify-start gap-10 grow shrink basis-0"
                        variants={fadeInStagger}
                        initial="hidden"
                        animate={controls}
                    >
                        <motion.div variants={fadeIn} className="text-xl font-light text-white">WIP</motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default WorkPage;