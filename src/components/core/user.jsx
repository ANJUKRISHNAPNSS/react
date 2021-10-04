import React from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import bj from "../images/bj.jpg"
class User extends React.Component {

    addemployeeDetails=()=>{
        this.props.history.push("/addproject")
    }
    addworkDetails=()=>{
        this.props.history.push("/addwork")
    }
    addemployeehistory=()=>{
        this.props.history.push("/addhistory")
    }
    addemployeesites=()=>{
        this.props.history.push("/addsite")
    }
    employeedetails=()=>{
        this.props.history.push("/viewProject")
    }
  //   addsite=()=>{
  //     this.props.history.push("/addsite")
  // }
  viewwork=()=>{
    this.props.history.push("/viewwork")
}
viewsites=()=>{
  this.props.history.push("/sitedetails")
}


    render() {
        return (
            // <>
            // <Button variant="dark" onClick={this.employeeDetails}>Transactions</Button>{' '}
            // </>
            <div style={{backgroundImage:`url(${bj})`,width:"100%",height:"100%",position:"fixed",backgroundSize:"cover"}}>
            <div style={{marginLeft:'5%'}}>
  <Button variant="outline-dark" onClick={this.addemployeeDetails} style={{align:'center', width:'500px', marginRight:'5%' ,marginTop:'5%' , height:'200px'}} size="lg">{' '}
  <b>Add Employee Details</b>
  </Button>
  <Button variant="outline-dark" onClick={this.addworkDetails} style={{align:'center', width:'500px' ,marginRight:'5%',marginTop:'5%', height:'200px'}} size="lg">
  <b>Add Work Details</b>
  </Button>
  <Button variant="outline-dark" onClick={this.addemployeehistory} style={{align:'center', width:'500px', marginRight:'5%',marginTop:'5%' , height:'200px'}} size="lg">{' '}
  <b> Add Employee History</b>
  </Button><br/><br/>
  <Button variant="outline-dark" onClick={this.addemployeesites} style={{align:'center', width:'500px', marginRight:'5%' , height:'200px'}} size="lg">{' '}
  <b> Add Employee Sites</b>
  </Button>
  
  <Button variant="outline-dark" onClick={this.employeedetails} style={{align:'center', width:'500px', marginRight:'5%' , height:'200px'}} size="lg">{' '}
    <b>View Employee details</b>
  </Button>
  {/* <Button variant="secondary" onClick={this.addsite} style={{align:'center', width:'500px', marginRight:'5%' , height:'200px'}} size="lg">{' '}
    Add new sites
  </Button><br/><br/> */}
  <Button variant="outline-dark" onClick={this.viewwork} style={{align:'center', width:'500px' , marginRight:'5%', height:'200px'}} size="lg">{' '}
  <b>View work details</b>
  </Button><br/><br/> 
  <Button variant="outline-dark" onClick={this.viewsites} style={{align:'center', width:'500px' , marginRight:'5%', height:'200px'}} size="lg">{' '}
  <b>View available sites</b>
  </Button>
</div>
</div>
        )
    }
}

export default User