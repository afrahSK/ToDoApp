import React, { useState } from 'react'
import './plan.css'
const Plan = ({ handleClick }) => {
    const [task, setTask] = useState("");
    const [days, setDays] = useState("");
    const addTask = (event) => {
        let temp = event.target.value;
        setTask(temp);
    }
    const addDays = (event) => {
        let temp = event.target.value;
        setDays(temp);
    }
    const btnadd = () => {
        handleClick(task, days)
        setTask("");
        setDays("");
    }
    return (
        <>
            <div className="main">
                <div className='planbox'>
                    <label htmlFor="inpTask" className='lbl'>Enter Task Name</label>
                    <input className="inpTask inp" type="text"
                        value={task} onChange={addTask} />
                    <label htmlFor="inpDays" className='lbl'>Enter Description</label>
                    <textarea type="text" className="inpDays"
                        value={days} onChange={addDays}>
                    </textarea>
                </div>
                <button className='btnAdd' onClick={btnadd}>A D D</button>
            </div>
        </>
    )
}

export default Plan