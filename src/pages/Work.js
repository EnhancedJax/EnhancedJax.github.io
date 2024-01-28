import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import SectionIndicator from '../components/sectionindicator';

const WorkPage = () => {
    const controls = useAnimation();

    useEffect(() => {

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
                <div className="px-5 pt-10 pb-20 justify-center items-center inline-flex max-w-[610px]">
                    <motion.div
                        className="grow shrink basis-0 self-stretch flex-col justify-start items-center gap-10 inline-flex"
                        variants={fadeInStagger}
                        initial="hidden"
                        animate={controls}
                    >
                        <motion.div variants={fadeIn} className="text-white text-xl font-light">WIP</motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default WorkPage;