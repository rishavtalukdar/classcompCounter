import React from "react";


export default function CustomButton({children,func}){
    console.log("immm" )
    return(
        
            <button  style ={{width: "100px"}} onClick={func}>{children}</button>
    
        
    )
    
}