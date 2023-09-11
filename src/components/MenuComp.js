import React, { useState ,useEffect} from "react"
import dishData from "../Data/dishData";
import styles from "../styles/App.css"
import Item from "./Item";

const MenuComp=()=>{

    const [items,setItems] = useState([])
    console.log(dishData)

    useEffect(()=>{
        showAllItems()
    },[]    
    )

    function showAllItems(){
        setItems(dishData)
    }

    function showLunchItems(){
        const lunchItemsArr= dishData.filter((item)=>item.category==="lunch")
        setItems(lunchItemsArr)
    }

    function showBreakfastItems(){
        const breakfastItemsArr= dishData.filter((item)=>item.category==="breakfast")
        setItems(breakfastItemsArr)
    }

    function showShakesItems(){
        const shakesItemsArr= dishData.filter((item)=>item.category==="shakes")
        setItems(shakesItemsArr)
    }


    return(
        <div className="main-container">
                <h1>Our Menu</h1>
                <div className="nav-container"> 
                    <span id="main"  onClick={()=>showAllItems()}>All </span>
                    <span id="filter-btn-1" onClick={()=>showBreakfastItems()}>Breakfast </span>
                    <span  id="filter-btn-2" onClick={()=>showLunchItems()}>Lunch </span>
                    <span id="filter-btn-3" onClick={()=>showShakesItems()}>Shakes</span>
                </div>
                <Item  items={items} />
                
        </div>
    )
}

export default MenuComp;