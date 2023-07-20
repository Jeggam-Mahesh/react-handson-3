import React, { Component } from "react";
import './styles.css'
class DisplayForm extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    
render(){
    return (
        <>  
        <h1>EMPLOYEE   FEEDBACK   DATA</h1>
        <div className="parent">
           { this.props.value.map((item,index)=>{
                return(
                    <div id='box' key={index} >
                      <h2>  Name:{item.name}||Department:{item.department}||Rating:{item.rating}</h2>
                    </div>
                )
            })}
        </div>
        <br></br>
        <centr>
        <button onClick={this.props.toggleFunc}>Go Back</button>
        </centr>
        </>
    )
}
} 
export default DisplayForm;