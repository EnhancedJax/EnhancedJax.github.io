import { React, useState } from 'react'
import data from "./listdata.json"
import { AnimatePresence, motion } from "framer-motion";

function List(props) {
    //create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.course_code.toLowerCase().includes(props.input)
        }
    })
    return (
        <AnimatePresence mode='popLayout' className="flex flex-col gap-4">
            {filteredData.map((item) => (
                <motion.a
                    key={item.course_code}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 200, opacity: 0 }}
                    src={`https://raw.githubusercontent.com/EnhancedJax/Study-Materials/master/Year%20${item.year}%20${item.season}/${item.course_code}/${item.course_code}%20Notes.jpg`}
                    alt={item.course_code}
                    className="flex flex-row justify-between items-center py-3 px-5 gap-4 w-full rounded-lg bg-white border border-neutral-100 cursor-pointer transition ease-out duration-200 notes_dl_item" href={`https://raw.githubusercontent.com/EnhancedJax/Study-Materials/master/Year%20${item.year}%20${item.season}/${item.course_code}/${item.course_code}%20Notes.pdf`}
                >
                    <p>{item.course_code}</p>
                    <p>{item.date}</p>
                    <p>Download</p>
                </motion.a>
            ))
            }
        </AnimatePresence >
    )
}

export default List
