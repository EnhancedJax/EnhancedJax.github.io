import React, { useEffect, useState } from 'react';
import List from "../components/list";
import { motion, useAnimation } from "framer-motion";

function NotesPage() {

    const [inputText, setInputText] = useState("");
    const controls = useAnimation();
    const [iframeUrl, setIframeUrl] = useState("");

    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    const handleItemClick = (url) => {
        setIframeUrl(url);
    };


    useEffect(() => {
        controls.set("hidden");
        controls.start("visible");
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

    return (
        <>
            <div className="flex flex-row justify-center h-screen lg:pl-16">
                <div className="px-5 pt-10 pb-20 w-full lg:w-[340px] lg:min-w-[340px] lg:border-r lg:border-r-cborder max-w-[610px] ">
                    <motion.div className="flex flex-col w-full gap-10"
                        variants={fadeInStagger}
                        initial="hidden"
                        animate={controls}
                        exit="hidden">
                        <div className="flex flex-col justify-center gap-2 pl-3">
                            <motion.div variants={fadeIn} className="text-xl font-light text-white lg:text-base">My University Notes</motion.div>
                            <motion.div variants={fadeIn} className="text-lg font-light text-cgray lg:text-base">Typed with LaTeX.</motion.div>
                        </div>
                        <div className="self-stretch h-[466px] flex-col justify-start items-start gap-3 flex">
                            <motion.input
                                variants={fadeIn}
                                id="outlined-basic"
                                onChange={inputHandler}
                                placeholder="Type to search by course code"
                                type="text"
                                className="w-full p-4 bg-cborder rounded-lg border border-cborder flex-col justify-start items-start gap-2.5 flex text-cpg text-base font-light placeholder-cgray"
                            />
                            <motion.div variants={fadeIn}>
                                <List input={inputText} onItemClick={handleItemClick} />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
                <div className='hidden w-full h-full lg:block'>
                    <motion.iframe variants={fadeIn} src={iframeUrl} width="100%" height="100%" />
                </div>
            </div>
        </>
    )
}

export default NotesPage;