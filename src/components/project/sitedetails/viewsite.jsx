import React from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deletesite, getemployeesite } from "../../../redux/action/siteaction";
import R from "../../images/R.png"
import Table from 'react-bootstrap/Table' 
class viewSite extends React.Component {
    
      
        constructor(props){
            super(props)
            this.props.getsiteData()
        }
        deleteData=(id)=>{
            this.props.deleteempsite(id);
            setTimeout(()=>{
                this.props.getsiteData()
            },200)
        }
        render(){
                let { projectsiteCollection} = this.props
                console.log("abc",projectsiteCollection)
                return (
                    <>
                    <h1><center>VIEW SITES</center></h1>
                   <div style={{backgroundImage:`url(${R})`,width:"100%",height:"100%",position:"fixed",backgroundSize:"cover"}}>
                    <Table striped bordered hover variant="primary" align="center" style={{width:"50%"}}>
                        <thead>
                        <th>employee site no</th>
                            <th>employee site name</th>
                            
                            
                            
                        </thead>
                        {
                            projectsiteCollection.map(res=>(
                                <tbody>
                                    <td>{res.emp_site_no}</td>
                                <td>{res.emp_site_name}</td>
                                <td><button onClick={()=>this.deleteData(res.emp_site_no)}>delete</button></td>
                                
                                </tbody>
                            ) )}
                    </Table>
                    </div>
                    </>)
            }
        }const mapStateToProps = (state) => {
            return {
                projectsiteCollection: state.site
            }
        }
        const mapDispatchToProps = (dispatch) => {
            return {
                getsiteData: bindActionCreators( getemployeesite, dispatch),
                deleteempsite:bindActionCreators( deletesite, dispatch)
            }
        }
        

export default connect(mapStateToProps, mapDispatchToProps)(viewSite)