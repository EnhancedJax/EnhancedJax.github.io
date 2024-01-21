import { React, useState } from 'react'
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
        <div style={{ backgroundColor: 'red', display: 'flex', padding: '10px', gap: '10px', flexWrap: 'wrap' }}>
            {filteredData.map((item) => (
                <div style={{
                    padding: '10px',
                    backgroundColor: 'green',
                    borderRadius: '10px'
                }}>
                    <p>{item.course_code}</p>
                    <p>{item.year}</p>
                </div>
            ))
            }
        </div >
    )
}

// TODO: Download notes from repo.

export default List
