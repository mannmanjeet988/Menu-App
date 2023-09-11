import React from "react"

const Item = ({items})=>{

    let str="hello manjeet";
    function convertToUpperCase(str){
      let arr = str.split(" ").trim()
        
    }

    return(
        <div className="items-container" >
                    {
                        items.map((item)=>(
                             <div className="itemcont"  data-test-id="menu-item-{item.category}"> 
                                <div className="left-container"  >
                                     {/* <img  src={item.img}/> */}
                                     <img  src="data:image/jpeg;base64,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"/>
                                </div>
                                
                                <div className="right-container">
                                    <div className="title">
                                        <span>{item.title}</span>
                                        <span>${item.price}</span>
                                    </div>
                                    <div className="desc">
                                    <p>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                            ))
                    }
                </div>
    )
}

export default Item