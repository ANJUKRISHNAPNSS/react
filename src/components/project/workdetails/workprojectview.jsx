// import React from "react"
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { getProjectwork } from "../../../redux/action/project.action";
// import { deleteDataworkdetails } from "../../../redux/action/project.action";

// class viewwork extends React.Component {
    
      
//         constructor(props){
//             super(props)
//             this.props.getProjectWork()
//         }

        


//         deletework=(id)=>{
//             this.props.deleteworkdet(id);
//             setTimeout(()=>{
//                 this.props.getProjectWork()
//             },200)
//         }
//         render(){
//                 let { projectworkCollection} = this.props
//                 console.log("abc",projectworkCollection)
//                 return (
//                     <>
//                     <table>
//                         <tr>
//                         <th>work id</th>
//                             <th>employee id</th>
//                             <th>work hours</th>
//                             <th>from date</th>
//                             <th>to date</th>
//                             <th>monthly salary</th>
                            
                            
//                         </tr>
//                         {
//                             projectworkCollection.map(res=>(
//                                 <tr>
//                                     <td>{res.work_id}</td>
//                                     <td>{res.emp_id_no}</td>
                                
//                                 <td>{res.work_hours}</td>
//                                 <td>{res.from_date}</td>
//                                 <td>{res.to_date}</td>
//                                 <td>{res.monthly_salary}</td>
//                                 <td><button onClick={()=>this.deletework(res.work_id)}>delete</button></td>
//                                 </tr>
//                             ) )}
//                     </table>
                        
//                     </>)
//             }
//         }const mapStateToProps = (state) => {
//             return {
//                 projectworkCollection: state.work
//             }
//         }
//         const mapDispatchToProps = (dispatch) => {
//             return {
//                 getProjectWork: bindActionCreators( getProjectwork, dispatch),
//                 deleteworkdet:bindActionCreators( deleteDataworkdetails, dispatch)
//             }
//         }
        

// export default connect(mapStateToProps, mapDispatchToProps)(viewwork)



import React from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {  updatework } from "../../../redux/action/workaction";
import { deleteDataworkdetails } from "../../../redux/action/workaction";
import {getProjectwork} from"../../../redux/action/workaction"
import Table from 'react-bootstrap/Table' 
import emp from "../../images/emp.jpg"
class viewwork extends React.Component {
    
      
        constructor(props){
            super(props)
            this.props.getProjectWork()
        }

        editData=(id)=>{

            this.data=this.props.projectworkCollection[id]
    
            this.props.updatework(this.data)
    
            this.props.history.push('/addwork')
    
        }


        deletework=(id)=>{
            this.props.deleteworkdet(id);
            setTimeout(()=>{
                this.props.getProjectWork()
            },200)
        }
        render(){
                let { projectworkCollection} = this.props
                console.log("abc",projectworkCollection)
                return (
                    <>
                    <div style={{backgroundImage:`url(${emp})`,width:"100%",height:"100%",position:"fixed",backgroundSize:"cover"}}>
                    <Table striped bordered hover variant="primary" align="center" style={{width:"70%"}}>
                        <thead>
                        <tr>
                        <th>work id</th>
                            <th>employee id</th>
                            <th>work hours</th>
                            <th>from date</th>
                            <th>to date</th>
                            <th>Monthly Salary</th>
                            <th></th>
                            <th></th>
                            
                            
                            
                        </tr>
                        </thead>
                        {
                            projectworkCollection.map((res,key)=>(
                                <tbody>
                                <tr>
                                    <td>{res.work_id}</td>
                                    <td>{res.emp_id_no}</td>
                                
                                <td>{res.work_hours}</td>
                                <td>{res.from_date}</td>
                                <td>{res.to_date}</td>
                                <td>{res.monthly_salary}</td>
                                <td><button onClick={()=>this.editData(key)}>edit</button></td>
                                <td><button onClick={()=>this.deletework(res.work_id)}>delete</button></td>
                                </tr>
                                </tbody>
                            ) )}
                    </Table>
                      </div>  
                    </>)
            }
        }const mapStateToProps = (state) => {
            return {
                projectworkCollection: state.work.work
            }
        }
        const mapDispatchToProps = (dispatch) => {
            return {
                getProjectWork: bindActionCreators( getProjectwork, dispatch),
                deleteworkdet:bindActionCreators( deleteDataworkdetails, dispatch),
                updatework:bindActionCreators( updatework, dispatch)
            }
        }
        

export default connect(mapStateToProps, mapDispatchToProps)(viewwork)