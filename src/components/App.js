{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */}

import React from "react"
import MenuComp from "./MenuComp";

const App = () =>{
    return(
        <div>
            <MenuComp />
        </div>
    )
}

export default App;