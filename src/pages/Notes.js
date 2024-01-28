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
            <div className="lg:pl-16 flex-row flex h-screen">
                <div className="px-5 pt-10 pb-20 w-full lg:w-[340px] lg:min-w-[340px] lg:border-r lg:border-r-cborder">
                    <div className="w-full flex-col gap-10 flex">
                        <div className="pl-3 flex-col justify-center gap-2 flex">
                            <div className="text-white text-xl font-light lg:text-base">My University Notes</div>
                            <div className="text-cgray text-lg font-light lg:text-base">Typed with LaTeX.</div>
                        </div>
                        <div className="self-stretch h-[466px] flex-col justify-start items-start gap-3 flex">
                            <input
                                id="outlined-basic"
                                onChange={inputHandler}
                                placeholder="Type to search by course code"
                                type="text"
                                className="w-full p-4 bg-cborder rounded-lg border border-cborder flex-col justify-start items-start gap-2.5 flex text-cpg text-base font-light placeholder-cgray"
                            />
                            <List input={inputText} onItemClick={handleItemClick} />
                        </div>
                    </div>
                </div>
                <div className='hidden lg:block w-full h-full'>
                    <iframe src={iframeUrl} width="100%" height="100%" />
                </div>
            </div>
        </>
    )
}

export default NotesPage;