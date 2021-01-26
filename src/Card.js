import "./card.css"

import React from 'react'

function Card({item}) {


    return (
           
        
        <div class="row">
            <div class="column"></div>
                <p>{item.title}</p>
                <input type="checkbox" className="chk__box"></input>
            <div class="column"></div>
        </div>   

    )
}

export default Card
