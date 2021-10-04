import React from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getemployeeHistory } from "../../../redux/action/historyaction";
import { deleteDataworkhistory } from "../../../redux/action/historyaction";
import Table from 'react-bootstrap/Table' 
import emp from "../../images/emp.jpg"
class viewHistory extends React.Component {
    
      
        constructor(props){
            super(props)
            this.props.getHistoryData()
        }
        deleteData=(id)=>{
            this.props.delHistoryData(id);
            setTimeout(()=>{
                this.props.getHistoryData()
            },200)
        }
        render(){
                let { empHistoryCollection} = this.props
                console.log("abc",empHistoryCollection)
                return (
                    <>
                    <div style={{backgroundImage:`url(${emp})`,width:"100%",height:"100%",position:"fixed",backgroundSize:"cover"}}>
                   <Table striped bordered hover variant="primary" align="center" style={{width:"70%"}}>
                        <thead>
                        <tr>
                        
                            <th>No</th>
                            <th>Employee Id</th>
                            <th>from date</th>
                            <th>to date</th>
                            <th>employee site</th>
                            
                            
                        </tr>
                        </thead>
                        {
                            empHistoryCollection.map(res=>(
                                <tbody>
                                <tr>
                                    <td>{res.no}</td>
                                <td>{res.emp_id_no}</td>
                                <td>{res.from_date}</td>
                                <td>{res.to_date}</td>
                                <td>{res.emp_site_no}</td>
                                <td><button onClick={()=>this.deleteData(res.no)}>delete</button></td>
                               
                                </tr>
                                </tbody>
                            ) )}
                    </Table>
                    </div> 
                    </>)
            }
        }const mapStateToProps = (state) => {
            return {
                empHistoryCollection: state.history
            }
        }
        const mapDispatchToProps = (dispatch) => {
            return {
                getHistoryData: bindActionCreators( getemployeeHistory, dispatch),
                delHistoryData: bindActionCreators( deleteDataworkhistory, dispatch)
            }
        }
        

export default connect(mapStateToProps, mapDispatchToProps)(viewHistory)