import React from "react"
import "../../src/index.css"

export default function Popups(props) {
  
    return (
       
           
                 <div className="col" onClick={() => {props.handleChange(props.apraksts)}}>
                    <img   src={props.img} className="icons-services" />
                    <h2 className="section-title section-title-center" >{props.virsraksts}</h2>
            </div>
          
           
        
    )
}