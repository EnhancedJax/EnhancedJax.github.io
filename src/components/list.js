import { React, useState } from 'react'
import TypingText from '../components/typing';
import data from "./listdata.json"

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
        <div class="list">
            {filteredData.map((item) => (
                <a class="list_item" href={`https://raw.githubusercontent.com/EnhancedJax/Study-Materials/master/Year%20${item.year}%20${item.season}/${item.course_code}/${item.course_code}%20Notes.pdf`}>
                    <p>{item.course_code}</p>
                    <p>{item.date}</p>
                    <p>Download</p>
                </a>
            ))
            }
        </div >
    )
}

// TODO: Download notes from repo.

export default List
