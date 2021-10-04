import React from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getfullProject, updateEmployee } from "../../../redux/action/project.action";
import { deleteDataempdetails } from "../../../redux/action/project.action";

class viewFullProject extends React.Component {
    
      
        constructor(props){
            super(props)
            this.props.getProjectData()
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
        render(){
            let { projectCollection} = this.props
            
                console.log("abc",projectCollection)
                return (
                    <>
                    <table>
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
                            
                            
                        </tr>
                        {
                            projectCollection.map((res,key)=>(
                                <tr>
                                    <td>{res.emp_id_no}</td>
                                <td>{res.first_name}</td>
                                <td>{res.last_name}</td>
                                <td>{res.mobile}</td>
                                <td>{res.email}</td>
                                <td>{res.password}</td>
                                <td>{res.emp_site_name}</td>
                                <td>{res.dob}</td>
                                <td>{res.city}</td>
                                {/* <td><button onClick={()=>this.editData(key)}>edit</button></td> */}
                                <td><button onClick={()=>this.deleteData(res.emp_id_no)}>delete</button></td>
                                </tr>
                            ) )}
                    </table>
                        
                    </>)
            }
        }const mapStateToProps = (state) => {
            return {
                projectCollection: state.project.project
            }
        }
        const mapDispatchToProps = (dispatch) => {
            return {
                getProjectData: bindActionCreators( getfullProject, dispatch),
                deleteempdet:bindActionCreators( deleteDataempdetails, dispatch),
                updateEmployee:bindActionCreators( updateEmployee, dispatch)
            }
        }
        

export default connect(mapStateToProps, mapDispatchToProps)(viewFullProject)