import React from 'react'
import "./header.css"

function Header() {

    function add(){
        
    }


    return (
        <div>
            <h1 className="td">To-Do App</h1>
            <div className="app_head">

                <input type="text" className="input"></input>
                <input type="button" onClick="add()" className="btn"></input>
            </div>
            
        </div>
    )
}

export default Header
