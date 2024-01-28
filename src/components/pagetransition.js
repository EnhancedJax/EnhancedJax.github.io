import { motion } from "framer-motion"

function PageTransition({ state }) {
    return (
        <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0, transition: { duration: 0.5, ease: "circOut" } }}
            exit={{ scaleY: 1, transition: { duration: 0.5, ease: "circIn" } }}
            style={{ originY: state ? 0 : 1 }}
            className="fixed top-0 left-0 right-0 bottom-0 bg-black z-50"
        />
    )
}

export default PageTransition;