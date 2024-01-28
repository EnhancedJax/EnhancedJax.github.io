import { Github, Instagram, Mail, Copy } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import headerImage from '../img/headericon.jpg';
import SectionIndicator from '../components/sectionindicator';
import { useAnimate, stagger } from "framer-motion"

const HomePage = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer); // Cleanup on unmount
        };
    }, []);


    return (
        <>
            <div className="flex justify-center items-center lg:pl-16">
                <div className="px-5 pt-10 pb-20 justify-center items-center inline-flex max-w-[610px]">
                    <div className="grow shrink basis-0 self-stretch flex-col justify-start items-center gap-10 inline-flex">
                        <div className="self-stretch flex-col justify-start items-center gap-4 flex">
                            <div className="h-7 text-cdarkgray text-sm font-light font-mono">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</div>
                            <img className="w-[72px] h-[72px] rounded-full" src={headerImage} />
                            <div className="self-stretch flex-col justify-start items-center gap-5 flex">
                                <div className="self-stretch flex-col justify-center items-center gap-2 flex">
                                    <div className="text-white text-xl font-light ">Jax Tam</div>
                                    <div className="text-cgray text-lg font-light ">Year 1 student at HKU</div>
                                </div>
                                <div className="justify-start items-center gap-4 inline-flex">
                                    <div className="w-2 h-2 bg-cgreen rounded-full animate-ping"></div>
                                    <div className="w-2 h-2 bg-cgreen rounded-full absolute"></div>
                                    <div className="text-cgray font-light text-base">Available for new opportunities</div>
                                </div>
                            </div>
                            <div className="self-stretch h-12 justify-center items-center gap-5 inline-flex">
                                <Github className='text-cdarkgray' />
                                <Instagram className='text-cdarkgray' />
                            </div>
                            <div className="w-full flex-col justify-center items-center gap-2 flex md:flex-row md:gap-4">
                                <div className="self-stretch h-[38px] px-11 py-2 bg-white rounded-lg justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-cbg font-light text-base">Contact me</div>
                                    <Mail className='text-cdarkgray w-5 h-5' />
                                </div>
                                <div className="text-cgray font-light ">or</div>
                                <div className="self-stretch h-[38px] px-11 py-2 bg-cfg rounded-lg border border-cborder justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-white font-light text-base">Copy email</div>
                                    <Copy className='text-cdarkgray w-5 h-5' />
                                </div>
                            </div>
                            <div className="self-stretch h-10 p-2.5 flex-col justify-center items-center gap-2.5 flex">
                                <div className="text-cdarkgray text-sm font-light font-mono text-center">NT, HK ⋅ 22.2849° N, 114.1376° W</div>
                            </div>
                        </div>
                        <div>
                            <SectionIndicator>About</SectionIndicator>
                            <div className="self-stretch text-gray-200 font-light text-base">I'm Jax, a year 1 student studying at The University of Hong Kong.<br /><br />My passion is to deliver clean designs and user-oriented experiences that exceed expectations.<br /><br />I believe my attention to detail and dedication to excellence will allow me to thrive in the future.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;