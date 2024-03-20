import React, { useState, useEffect } from 'react';
import SectionIndicator from '../components/sectionindicator';
import { motion, useAnimation } from "framer-motion";
import { Frame, GitPullRequestCreateArrow, Globe, Paintbrush } from 'lucide-react';

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
                            <SectionIndicator>Skill set</SectionIndicator>
                            <div className="flex flex-wrap gap-3">
                                <SkillItem name="Git Version Control" description="Branching, PRs, collaboration">
                                    <GitPullRequestCreateArrow size={32} className='text-cpg' />
                                </SkillItem>
                                <SkillItem name="Web development" description="Front-end focused, user-experience oriented">
                                    <Globe size={32} className='text-cpg' />
                                </SkillItem>
                                <SkillItem name="Flat design" description="Graphic design (posters, banner etc.), UI (Figma)">
                                    <Paintbrush size={32} className='text-cpg' />
                                </SkillItem>
                                <SkillItem name="Photography" description="Is simply capturing moments of sound">
                                    <Frame size={32} className='text-cpg' />
                                </SkillItem>
                            </div>
                        </motion.div>
                        <motion.div variants={fadeIn}>
                            <SectionIndicator>Technologies</SectionIndicator>

                            <div className="flex flex-col w-full gap-3 p-3 px-6 py-4 rounded-lg bg-cfg">
                                <LangItem name="HTML5" prog="9" level="2" />
                                <LangItem name="Tailwind CSS" prog="8" level="2" />
                                <LangItem name="Python" prog="7" level="2" />
                                <LangItem name="C++" prog="7" level="2" />
                                <LangItem name="React.js" prog="7" level="1" />
                                <LangItem name="React Native" prog="5" level="0" />
                            </ div>
                        </motion.div>
                        <motion.div variants={fadeIn}>
                            <SectionIndicator>Software</SectionIndicator>
                            <div className="flex flex-wrap gap-3">
                                <SoftwareItem name="Arc" type="BROWSER" icon="arcicon" />
                                <SoftwareItem name="Github Copilot" type="AI" icon="copiloticon" />
                                <SoftwareItem name="Notion" type="MANAGEMENT" icon="notionicon" />
                                <SoftwareItem name="VSCode" type="CODE" icon="vscodeicon" />
                                <SoftwareItem name="Raycast" type="PRODUCTIVITY" icon="raycasticon" />
                                <SoftwareItem name="iTerm2" type="TERMINAL" icon="iterm2icon" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

const LangItem = ({ name, prog, level }) => {
    const progType = ["Proficient", "Fluent", "Advanced"];
    const progColor = ["#FFC657", "#35CEFF", "#34D399"];
    return (
        <div className='flex items-center justify-between w-full'>
            <p className='text-base font-light text-cpg'>{name}</p>
            <div className='inline-flex items-center gap-4'>
                <div className='inline-flex justify-end w-32 h-2 rounded-lg bg-cborder'>
                    <div className="h-full rounded-lg" style={{ width: `${prog * 10}%`, backgroundColor: progColor[level] }} />
                </div>
                <p className="w-20 px-2 py-1 text-xs font-medium text-center rounded-3xl" style={{ backgroundColor: progColor[level] + '80', color: progColor[level] }}>{progType[level]}</p>
            </div>
        </div>
    )
}

const SkillItem = ({ children, name, description }) => {
    return (
        <div className="basis-[264px] grow h-[111px] p-4 bg-cfg rounded-lg justify-center items-center inline-flex gap-3">
            <div className="flex items-center justify-center w-[32px] px-2">
                {children}
            </div>
            <div className="inline-flex flex-col items-start justify-center grow shrink basis-0">
                <div className="text-base font-normal text-white">{name}</div>
                <div className="text-sm font-light text-cgray">{description}</div>
            </div>
        </div>
    )
}

const SoftwareItem = ({ name, type, icon }) => {
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
        </ div>
    )
}

export default StackPage;