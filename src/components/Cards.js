import React from 'react'
import './cards.css'
const Cards = ({ days }) => {
    return (
        <div id='cards'>
           {
            days.map(()=>{
                return <div class="container text-center bg-primary">
                <div class="row">
                    <div class="col">
                        Column
                    </div>
                    <div class="col">
                        Column
                    </div>
                    <div class="col">
                        Column
                    </div>
                </div>
            </div>
            })
           }
        </div>
    )
}

export default Cards