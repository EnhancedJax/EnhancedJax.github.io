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
                    alt={item.course_code}
                    href={`https://raw.githubusercontent.com/EnhancedJax/Study-Materials/master/Year%20${item.ayear}%20${item.season}/${item.course_code}/${item.course_code}%20Notes.pdf`}
                    className="self-stretch p-3 rounded-lg justify-start items-start gap-4 inline-flex">
                    <div className="w-10 h-10 bg-rose-500 rounded-xl" />
                    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                        <div className="text-gray-200 text-base font-light">{item.course_code}</div>
                        <div className="self-stretch text-cdarkgray text-base font-light">{item.name}<br />{item.year} {item.season}</div>
                    </div>
                </motion.a>
            ))
            }
        </AnimatePresence >
    )
}

export default List
