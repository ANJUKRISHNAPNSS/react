// import React from "react"
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { getProject } from "../../../redux/action/project.action";

// class viewProject extends React.Component {
    
      
//         constructor(props){
//             super(props)
//             this.props.getProjectData()
//         }
//         // deleteData=(id)=>{
//         //     this.props.deleteempdet(id)
//         //     this.props.getProjectData()
//         // }
//         render(){
//                 let { projectCollection} = this.props
//                 console.log("abc",projectCollection)
//                 return (
//                     <>
//                     <table>
//                         <tr>
//                         <th>Id</th>
//                             <th>Name</th>
//                             <th>last name</th>
//                             <th>mobile</th>
//                             <th>email</th>
//                             <th>password</th>
//                             <th>employee site</th>
//                             <th>date od birth</th>
//                             <th>city</th>
                            
                            
//                         </tr>
//                         {
//                             projectCollection.map(res=>(
//                                 <tr>
//                                     <td>{res.emp_id_no}</td>
//                                 <td>{res.first_name}</td>
//                                 <td>{res.last_name}</td>
//                                 <td>{res.mobile}</td>
//                                 <td>{res.email}</td>
//                                 <td>{res.password}</td>
//                                 <td>{res.emp_site}</td>
//                                 <td>{res.dob}</td>
//                                 <td>{res.city}</td>
//                                 {/* <td><button onClick={()=>this.deleteData(res.emp_id_no)}>delete</button></td>// */}
//                                 </tr>
//                             ) )}
//                     </table>
                        
//                     </>)
//             }
//         }const mapStateToProps = (state) => {
//             return {
//                 projectCollection: state.project
//             }
//         }
//         const mapDispatchToProps = (dispatch) => {
//             return {
//                 getProjectData: bindActionCreators( getProject, dispatch)
//             }
//         }
        

// export default connect(mapStateToProps, mapDispatchToProps)(viewProject)





import React from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProject, updateEmployee } from "../../../redux/action/project.action";
import { deleteDataempdetails } from "../../../redux/action/project.action";
import {getsiteemployee} from "../../../redux/action/project.action"
import { getemployeesite } from "../../../redux/action/siteaction";
import Table from 'react-bootstrap/Table' 
import bj from "../../images/bj.jpg"
class viewProject extends React.Component {
    
      
        constructor(props){
            super(props)
            this.props.getProjectData()
            this.props.getsiteemployee()
            this.props.getemployeeSite()
            this.state={emp_site:0}
        }
        editData=(id)=>{

            this.data=this.props.projectCollection[id]
    
            this.props.updateEmployee(this.data)
    
            this.props.history.push('/addProject')
    
        }
        deleteData=(id)=>{
            this.props.deleteempdet(id);
            setTimeout(()=>{
                this.props.getProjectData()
            },200)
        }
        siteemployee=()=>{
            if(this.state.emp_site==0){
                this.props.getProjectData()
            }
    else{
        this.props.getsiteemployee(this.state.emp_site)
    }
}
        render(){
            let { projectCollection} = this.props
            let{projectsitecollection}=this.props
                console.log("abc",projectCollection)
                return (
                    <>
                    <h1>EMPLOYEE DETAILS</h1>
                    <div style={{backgroundImage:`url(${bj})`,width:"100%",height:"100%",position:"fixed",backgroundSize:"cover"}}>
                    <select name="site" onChange={(event)=>this.setState({emp_site:event.target.value})}><option value="0">all</option>
                    
                    {projectsitecollection.map(res=>(<option value={res.emp_site_no}>{res.emp_site_name}</option>))}</select>{this.state.emp_site}<br/>
                    
                    <button onClick={()=>this.siteemployee()}>search site employee</button><br/>
                    <Table striped bordered hover variant="primary" align="center" style={{width:"70%"}}>
                        <thead>
                            <tr>
                        <th>Id</th>
                            <th>Name</th>
                            <th>last name</th>
                            <th>mobile</th>
                            <th>email</th>
                            <th>password</th>
                            <th>employee site</th>
                            <th>date od birth</th>
                            <th>city</th>
                            <th></th>
                            <th></th>
                            </tr>
                            
                        </thead>
                        {
                            projectCollection.map((res,key)=>(
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
                                <td><button onClick={()=>this.editData(key)}>edit</button></td>
                                <td><button onClick={()=>this.deleteData(res.emp_id_no)}>delete</button></td>
                                </tr>
                                </tbody>
                            ) )}
                    </Table>
                    </div>
                    </>)
            }
        }const mapStateToProps = (state) => {
            return {
                projectCollection: state.project.project,
                projectsitecollection:state.site
            }
        }
        const mapDispatchToProps = (dispatch) => {
            return {
                getProjectData: bindActionCreators( getProject, dispatch),
                deleteempdet:bindActionCreators( deleteDataempdetails, dispatch),
                updateEmployee:bindActionCreators( updateEmployee, dispatch),
                getsiteemployee:bindActionCreators( getsiteemployee, dispatch),
                getemployeeSite:bindActionCreators(getemployeesite,dispatch)
            }
        }
        

export default connect(mapStateToProps, mapDispatchToProps)(viewProject)