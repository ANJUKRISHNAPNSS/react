
import React from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import emp from "./../images/emp.jpg"
class Admin extends React.Component {

    employeeDetails=()=>{
        this.props.history.push("/viewProject")
    }
    workDetails=()=>{
        this.props.history.push("/viewwork")
    }
    employeehistory=()=>{
        this.props.history.push("/history")
    }
    employeesites=()=>{
        this.props.history.push("/sitedetails")
    }
    viewfulldetails=()=>{
      this.props.history.push("/fulldetails")
  }
  viewhisbydate=()=>{
    this.props.history.push("/hisdetails")
}
viewdetbyid=()=>{
  this.props.history.push("/iddetails")
}
viewhis=()=>{
  this.props.history.push("/history")
}

    render() {
        return (
            // <>
            // <Button variant="dark" onClick={this.employeeDetails}>Transactions</Button>{' '}
            // </>
            <div style={{backgroundImage:`url(${emp})`,width:"100%",height:"100%",position:"fixed",backgroundSize:"cover"}}>
            <div style={{marginLeft:'5%'}}>
  <Button variant="outline-dark" size="lg" style={{align:'center', width:'500px' ,marginRight:'5%'  ,marginTop:'5%'  , height:'200px'}} onClick={this.employeeDetails}  >{' '}
  <b> View Employee Details</b>
  </Button>
  
  <Button variant="outline-dark" onClick={this.workDetails} style={{align:'center', width:'500px', marginRight:'5%'  ,marginTop:'5%'  , height:'200px'}} size="lg" >{' '}
  <b>View Work Details</b>
  </Button>
  <Button variant="outline-dark" onClick={this.employeehistory} style={{align:'center', width:'500px', marginRight:'5%' ,marginTop:'5%'  , height:'200px'}} size="lg">{' '}
  <b>View Employee History</b>
  </Button><br/><br/>
  <Button variant="outline-dark" onClick={this.employeesites}  style={{align:'center', width:'500px', marginRight:'5%' , height:'200px'}} size="lg">{' '}
  <b> View Employee Sites</b>
  </Button>
  <Button variant="outline-dark" onClick={this.viewfulldetails} style={{align:'center', width:'500px', marginRight:'5%' , height:'200px'}} size="lg">{' '}
  <b> View Employee Full Details</b>
  </Button>
  <Button variant="outline-dark" onClick={this.viewhisbydate} style={{align:'center', width:'500px', marginRight:'5%' , height:'200px'}} size="lg">{' '}
    <b>View History by Id and date</b>
  </Button><br/><br/>
  <Button variant="outline-dark" onClick={this.viewdetbyid} style={{align:'center', width:'500px', marginRight:'5%' , height:'200px'}} size="lg">{' '}
  <b>View Details by id</b>
  </Button>
  <Button variant="outline-dark" onClick={this.viewhis} style={{align:'center', width:'500px', marginRight:'5%' , height:'200px'}} size="lg">{' '}
    View History
  </Button>
</div>
</div>
        )
    }
}

export default Admin