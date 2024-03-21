import React, { useState, useEffect } from 'react';
import SectionIndicator from '../components/sectionindicator';
import { AnimatePresence, motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import Icon from '../components/icon';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const StackPage = () => {
    const controls = useAnimation();
    const [index, setIndex] = useState(0);

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

    const fadeOutStagger = {
        visible: {
            opacity: 1
        },
        hidden: {
            opacity: 0,
            transition: {
                staggerChildren: 0.15
            }
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
                        exit="hidden"
                    >
                        <div className="flex flex-col items-start justify-center gap-2 pl-3">
                            <motion.div variants={fadeIn} className="text-xl font-light text-white">Stack</motion.div>
                            <motion.div variants={fadeIn} className="text-lg font-light text-cgray">My skills, technologies, tools and apps</motion.div>
                        </div>
                        <motion.div variants={fadeIn}>
                            <SectionIndicator>Skills</SectionIndicator>
                            <div className="flex flex-wrap gap-3">
                                <SkillItem icon="Globe" name="Web development" description="Front-end focused, user-experience oriented" />
                                <SkillItem icon="Paintbrush" name="Flat design" description="Graphic design (posters, banner etc.), UI (Figma)" />
                                <SkillItem icon="GitPullRequestCreateArrow" name="Git Version Control" description="Branching, PRs, collaboration" />
                                <SkillItem icon="Frame" name="Photography" description="Is simply capturing moments of sound" />
                            </div>
                        </motion.div>
                        <motion.div variants={fadeIn}>
                            <SectionIndicator>Technologies</SectionIndicator>

                            <div
                                className="flex flex-col w-full gap-3 p-3 px-6 py-4 rounded-lg bg-cfg">
                                <LangItem name="HTML5" prog="9" level="2" />
                                <LangItem name="Tailwind CSS" prog="8" level="2" />
                                <LangItem name="Python" prog="7" level="2" />
                                <LangItem name="C++" prog="7" level="2" />
                                <LangItem name="React.js" prog="7" level="1" />
                                <LangItem name="React Native" prog="5" level="0" />
                            </div>
                        </motion.div>
                        <motion.div variants={fadeIn}>
                            <SectionIndicator>Software</SectionIndicator>
                            <div className="flex flex-wrap gap-3">
                                <SoftwareItem name="Arc" type="BROWSER" icon="arc" />
                                <SoftwareItem name="Github Copilot" type="AI" icon="copilot" />
                                <SoftwareItem name="Notion" type="MANAGEMENT" icon="notion" />
                                <SoftwareItem name="VSCode" type="CODE" icon="vscode" />
                                <SoftwareItem name="Raycast" type="PRODUCTIVITY" icon="raycast" />
                                <SoftwareItem name="iTerm2" type="TERMINAL" icon="iterm2" />
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
            <div className='inline-flex items-center gap-3 sm:gap-4'>
                <div className='justify-end hidden w-32 h-2 rounded-lg sm:inline-flex bg-cborder'>
                    <div className="h-full rounded-lg" style={{ width: `${prog * 10}%`, backgroundColor: progColor[level] }} />
                </div>
                <div className='w-6 h-6 sm:hidden'>
                    <CircularProgressbar value={prog} maxValue={10} strokeWidth={14} styles={buildStyles({
                        pathColor: progColor[level],
                        trailColor: progColor[level] + '40'
                    })} />
                </div>

                <p className="w-20 px-2 py-1 text-xs font-medium text-center rounded-3xl" style={{ backgroundColor: progColor[level] + '80', color: progColor[level] }}>{progType[level]}</p>
            </div>
        </div>
    )
}

const SkillItem = ({ icon, name, description }) => {
    return (
        <div className="basis-[264px] grow h-[111px] p-4 bg-cfg rounded-lg justify-center items-center inline-flex gap-3">
            <div className="flex items-center justify-center w-[32px] px-2">
                <Icon name={icon} size={32} color='#FFF' />
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


{/* <motion.div className='relative h-40' variants={fadeIn}>
<AnimatePresence initial={false}>
    <Card key={index + 1} frontCard={false} />
    <Card
        key={index}
        frontCard={true}
        index={index}
        setIndex={setIndex}
        drag="x"
    />
</AnimatePresence>
</motion.div> */}


// function Card(props) {
//     const [exitX, setExitX] = useState(0);

//     const x = useMotionValue(0);
//     const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
//     const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
//         clamp: false
//     });

//     const variantsFrontCard = {
//         animate: { scale: 1, y: 0, opacity: 1 },
//         exit: (custom) => ({
//             x: custom,
//             opacity: 0,
//             scale: 0.5,
//             transition: { duration: 0.2 }
//         })
//     };
//     const variantsBackCard = {
//         initial: { scale: 0, y: 105, opacity: 0 },
//         animate: { scale: 0.75, y: 30, opacity: 0.5 }
//     };

//     function handleDragEnd(_, info) {
//         if (info.offset.x < -100) {
//             setExitX(-250);
//             props.setIndex(props.index + 1);
//         }
//         if (info.offset.x > 100) {
//             setExitX(250);
//             props.setIndex(props.index + 1);
//         }
//     }

//     return (
//         <motion.div
//             style={{
//                 width: 150,
//                 height: 150,
//                 position: "absolute",
//                 top: 0,
//                 x,
//                 rotate,
//                 cursor: "grab"
//             }}
//             whileTap={{ cursor: "grabbing" }}
//             // Dragging
//             drag={props.drag}
//             dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
//             onDragEnd={handleDragEnd}
//             // Animation
//             variants={props.frontCard ? variantsFrontCard : variantsBackCard}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             custom={exitX}
//             transition={
//                 props.frontCard
//                     ? { type: "spring", stiffness: 300, damping: 20 }
//                     : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
//             }
//         >
//             <motion.div
//                 className='w-[400px] h-[150px] bg-white'
//                 style={{
//                     borderRadius: 30,
//                     scale
//                 }}
//             />
//         </motion.div>
//     );
// }

export default StackPage;