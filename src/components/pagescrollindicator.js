import { motion, useScroll } from "framer-motion";

const PageScrollIndicator = () => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className="fixed bottom-0 left-0 w-full h-2 bg-black z-50 origin-left"
            style={{ scaleX: scrollYProgress }}
        />
    )
}

export default PageScrollIndicator;