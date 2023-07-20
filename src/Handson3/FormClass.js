import React from "react";
import { Component } from "react";
import DisplayForm from "./DisplayForm";
import './styles.css'
class FormClass extends Component{
    constructor(){
        super();
    this.state = {
        Name: '',
        Department: '',
        Rating: '',
        EmpData: [],
        clicked:true
      };
    }
      changeHandle = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        // console.log(this.state.Name);
      };
      clickHandle=()=>{
    let  newObj={
        name:this.state.Name,
        department:this.state.Department,
        rating:this.state.Rating
       }
       this.state.EmpData.push(newObj);
       console.log(this.EmpData)
       this.setState(
        {
           EmpData:this.state.EmpData,
          Name : '',
          Department : '',
          Rating : '',
          clicked:false
         });
    }

    toggleFunc=()=>{
      this.setState({clicked:!this.state.clicked})
    }
render(){
    return (
       < >
       {
        this.state.clicked ?
        <div id='emp'>
          <h1>EMPLOYEE  FEEDBACK  FORM</h1>
            <center>
      <table style={{textAlign:'left'}}>
      {/* <form> */}
        
          <tr>
            <th>
            <label htmlFor="name">Name:</label>
            </th>
            <td>
            <input
          id="name"
          type="text"
          placeholder="enter name"
          value={this.state.value}
          name="Name"
          onChange={this.changeHandle}
          required
        ></input>
            </td>
          </tr>
       <tr>
        <th>
        <label htmlFor="department">Department:</label>
        </th>
        <td>
        <input
          id="department"
          type="text"
          placeholder="enter department"
          name="Department"
          value={this.state.value}
          onChange={this.changeHandle}
          required
        ></input>
        </td></tr>
        <tr>
          <th>
          <label htmlFor="rating">Rating</label>
          </th>
          <td>
          <input
          type="number"
          id="rating"
          placeholder="enter rating"
          name="Rating"
          value={this.state.value}
          onChange={this.changeHandle}
          required
        ></input>
          </td>
        </tr>
        </table>
        </center>
        <br></br>
        <button  onClick={this.clickHandle}>Submit</button>
        </div>
        :
        <DisplayForm value={this.state.EmpData} toggleFunc={this.toggleFunc}/>
       }
        </>    
    )
}

}

export default FormClass;