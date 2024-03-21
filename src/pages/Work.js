import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import SectionIndicator from '../components/sectionindicator';
import { ArrowRightCircle } from 'lucide-react';
import { getPosts, getPostDetails } from '../services';
import PostDetail from '../components/PostDetail';

const WorkPage = () => {
    const [posts, setPosts] = useState([]);
    const [activePost, setActivePost] = useState([]);

    useEffect(() => {
        const fetchAllPost = async () => {
            const fetchedPosts = (await getPosts()) || [];
            setPosts(fetchedPosts);
            const fetchLatestDetails = (await getPostDetails(fetchedPosts[0].node.slug)) || [];
            setActivePost(fetchLatestDetails);
            // console.log("activePost: ", activePost);
        };

        controls.set("hidden");
        fetchAllPost();
        controls.start("visible");
    }, []);

    const controls = useAnimation();

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


    const slideUp = {
        visible: {
            opacity: 1,
            translateY: 0,
            transition: {
                type: "spring",
                duration: 1
            }
        },
        hidden: {
            opacity: 0,
            translateY: 20
        }
    };

    return (
        <>
            <div className="flex flex-row justify-center h-screen lg:pl-16">
                <div className="px-5 pt-10 pb-20 w-full lg:w-[340px] lg:min-w-[340px] lg:border-r lg:border-r-cborder max-w-[400px] ">
                    <motion.div className="flex flex-col w-full gap-10"
                        variants={fadeInStagger}
                        initial="hidden"
                        animate={controls}
                        exit="hidden">
                        <div className="flex flex-col justify-center gap-2 pl-3">
                            <motion.div variants={fadeIn} className="text-xl font-light text-cpg lg:text-base">Work</motion.div>
                            <motion.div variants={fadeIn} className="text-lg font-light text-cgray lg:text-base">My portfolio</motion.div>
                        </div>

                        <div className="flex flex-col items-start justify-start gap-3">
                            {posts.map((post, index) => (
                                <div
                                    variants={slideUp}
                                    key={index}
                                    whileHover={{ scale: 1.02, rotate: 2 }}
                                    className='w-full p-0.5 cursor-pointer rounded-2xl bg-gradient-to-tr from-cborder via-cgray to-cborder bg-opacity-30'>
                                    <div className="inline-flex flex-col items-start justify-start w-full h-full bg-cfg rounded-2xl">
                                        <img src={post.node.heroImage.url} className="self-stretch object-cover h-48 rounded-2xl" />
                                        <div className="w-full px-3 py-5 flex-col justify-start items-start gap-2.5 flex">
                                            <div className="text-base font-normal text-cpg">{post.node.title}</div>
                                            <div className="self-stretch text-base font-light text-cgray">{post.node.excerpt}
                                            </div>
                                            <div className="self-stretch justify-end items-center gap-2.5 inline-flex">
                                                <div
                                                    className="flex items-center justify-end gap-2 px-3 py-2 rounded-lg bg-cborder">
                                                    <div className="text-base font-normal text-right text-cpg">Read more</div>
                                                    <ArrowRightCircle className='w-4 h-4 text-cpg' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
                <div className='hidden w-full h-full lg:flex bg-cread'>
                    <PostDetail post={activePost} />
                </div>
            </div >
        </>
    )
}

export default WorkPage;