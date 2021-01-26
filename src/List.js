import React,{useState,useEffect}from 'react'
import Card from "./Card"
import "./list.css"

function List() {
    
    useEffect(() => {
        fetchItems();
    }, []);

    const [item, setItem] = useState([])

    const fetchItems = async()=>{
        const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    
        const items = await data.json();
        console.log(items)
        setItem(items)
    }



    return (
        <div>

            <h1 className="to__do">To-Do</h1>
           
            {
                item.map((item)=><Card item={item} key={item.id} />)
            }

            <h1 className="done">Done</h1>

            {/* {
                item.map((item)=>(<Card item={item} key={item.id} />))
            } */}


        </div>
    )
}

export default List
