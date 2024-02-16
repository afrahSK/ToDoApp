import React from 'react'
// import { Link } from 'react-router-dom';
import './list.css'
const List = ({ tasks, handleDel ,handleView}) => {
  return (
    <div className="list">
      <ol class="list-group list-group-numbered">
        {
          tasks.map(({task,days})=>{
            return <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto bg-transparent">
              <div class="fw-bold">{task}</div>
              {days}
            </div>
            <button className='btn btn-primary mt-2' onView={()=>handleView(days)}>VIEW</button>
            <button className='btn btn-primary mt-2'>EDIT</button>
            <button className='btn btn-primary mt-2' onClick={()=>handleDel(task)}>DELETE</button>
          </li>
          })
        }
      </ol>
      </div>
  )
}
export default List