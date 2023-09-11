import React from "react"

const Item = ({items})=>{

    
    function convertToUpperCase(str) {
        let arr = str.split(" ");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].trim()[0].toUpperCase() + arr[i].substring(1);
        }
        console.log(arr.join(" "));
        return arr.join(" ");
    }
    
    function convertFirstLetterToUpperCase(str) {
        if (str.length === 0) {
            return str; // Handle empty string
        }
        
        return str[0].toUpperCase() + str.substring(1);
    }
    
    

    return(
        <div className="items-container" >
                    {
                        items.map((item)=>(
                             <div className="itemcont"  data-test-id="menu-item-{item.category}"> 
                                <div className="left-container"  >
                                     <img  src={item.img}/>
                                    
                                </div>
                                
                                <div className="right-container">
                                    <div className="title">
                                        <span>{convertToUpperCase(item.title)}</span>
                                        <span id="price">${item.price}</span>
                                    </div>
                                    <div className="desc">
                                    <p>{convertFirstLetterToUpperCase(item.desc)}</p>
                                    </div>
                                </div>
                            </div>
                            ))
                    }
                </div>
    )
}

export default Item