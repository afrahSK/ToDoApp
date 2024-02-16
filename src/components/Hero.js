import React from 'react'
import Plan from './Plan'
import List from './List'
import { useState } from "react";
import './hero.css';
const Hero = () => {
    const list = [];
  const [mainlist,setMainlist] = useState([]);
  const [days,setDays] = useState(0);
  const onClick=(task,days)=>{
    let templist = [...mainlist,{task:task,days:days}];
    setMainlist(templist);
  }
  const onDel=(task)=>{
    console.log(task);
    const newList = mainlist.filter((curr)=>{
        return curr.task!==task;
    })
    setMainlist(newList);
  }
  const onView=(days)=>{
    setDays(days);
  }
  return (
    <>
            <Plan handleClick={onClick}/>
            {mainlist.length===0 && <h1 className='msg'>List is Empty</h1>}  
            <List tasks={mainlist} handleDel={onDel} handleView={onView}/>
    </>
  )
}

export default Hero