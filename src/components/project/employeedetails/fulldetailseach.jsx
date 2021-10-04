import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getempbyid } from "../../../redux/action/project.action";
import emp from "../../images/emp.jpg"

class   EmpDetById extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            emp_id_no: 0
            
        }
    }
    getData = () => {
        this.props.getempbyid(this.state.emp_id_no)
    }

    render() {
        let { getbyId } = this.props
        return (
            <div >
                <h1><center>EMPLOYEE DETAILS</center></h1>
                <div style={{backgroundImage:`url(${emp})`,width:"100%",height:"100%",position:"fixed",backgroundSize:"cover"}}>
                <div style={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                    Id no:<input type="number" onChange={(event) => this.setState({ emp_id_no: event.target.value })} />{this.state.emp_id_no} <br />
                    
                   
                    <button onClick={this.getData}>GET</button>
                </div>
                <Table striped bordered hover variant="primary" align="center" style={{width:"70%"}}>
                   <thead> <tr>
                        <th>No</th>
                        <th>first name</th>
                        <th>last name</th>
                        <th>mobile</th>
                        <th>email</th>
                        <th>password</th>
                        <th>employee site</th>
                        <th>dob</th>
                        <th>city</th>
                        
                    </tr></thead>
                    {
                        getbyId.map(res => (
                            <tbody>
                            <tr>
                                <td>{res.emp_id_no}</td>
                                <td>{res.first_name}</td>
                                <td>{res.last_name}</td>
                                <td>{res.mobile}</td>
                                <td>{res.email}</td>
                                <td>{res.password}</td>
                                <td>{res.emp_site}</td>
                                <td>{res.dob}</td>
                                <td>{res.city}</td>
                               

                            </tr></tbody>
                        ))
                    }
                </Table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        getbyId: state.empid
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        getempbyid: bindActionCreators(getempbyid, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EmpDetById)