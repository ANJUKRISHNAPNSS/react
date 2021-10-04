import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux'
import {  addProjectToDb, editemployee, updateEmployee } from "../../../redux/action/project.action";
import { getemployeesite } from "../../../redux/action/siteaction";
import { getemployeecity } from "../../../redux/action/siteaction";
import emp from "../../images/emp.jpg"

class AddProject extends React.Component{


    constructor(props){
        super(props)
        this.state={
            emp_id_no:this.props.editData.emp_id_no?this.props.editData.emp_id_no:"",
            first_name:this.props.editData.first_name?this.props.editData.first_name:"",
            last_name:this.props.editData.last_name?this.props.editData.last_name:"",
            mobile:this.props.editData.mobile?this.props.editData.mobile:"",
            email:this.props.editData.email?this.props.editData.email:"",
            password:this.props.editData.password?this.props.editData.password:"",
            emp_site:this.props.editData.emp_site_no?this.props.editData.emp_site_no:1,
            dob:this.props.editData.dob?this.props.editData.dob:"",
            city:this.props.editData.city?this.props.editData.city:1
        }
        this.props.getemployeeSite()
        this.props.getemployeeCity()
    }


    saveData=()=>{
        
        this.props.addprojecttoDb({emp_id_no:this.state.emp_id_no,first_name:this.state.first_name,last_name:this.state.last_name,mobile:this.state.mobile,email:this.state.email,password:this.state.password,emp_site:this.state.emp_site,dob:this.state.dob,city:this.state.city})}
        editData = () => {

            this.props.editemployee(this.state, this.props.editData.emp_id_no)
            console.log(this.state)
    
            this.props.updateEmployee({})
    
            this.props.history.push('/viewProject')
        }    
        
        
        render(){
            let {projectsiteCollection}=this.props
            let {projectcityCollection}=this.props
            let {editData}=this.props
            return(<>
            <h1>        Enter employee details</h1>
                <div style={{backgroundImage:`url(${emp})`,width:"100%",height:"100%",position:"fixed",backgroundSize:"cover"}}>
                <div style={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                    Employee id   <input type="number" value={this.state.emp_id_no} onChange={(event)=>this.setState({emp_id_no:event.target.value})}  />{this.state.emp_id_no} <br />
                    First name    <input type="text" value={this.state.first_name} onChange={(event)=>this.setState({first_name:event.target.value})} />{this.state.first_name} <br />
                    Last name     <input type="text" value={this.state.last_name} onChange={(event)=>this.setState({last_name:event.target.value})}  />{this.state.last_name}<br/>
                    Mobile        <input type="number" value={this.state.mobile} onChange={(event)=>this.setState({mobile:event.target.value})}  />{this.state.mobile}<br/>
                    Email         <input type="text" value={this.state.email} onChange={(event)=>this.setState({email:event.target.value})}  />{this.state.email}<br/>
                    Password      <input type="text" value={this.state.password} onChange={(event)=>this.setState({password:event.target.value})}  />{this.state.password}<br/>
                    Employee site <select name="site" onChange={(event) => this.setState({ emp_site: event.target.value })}>
                    {
                        projectsiteCollection.map(res=>(
                            <option value={res.emp_site_no} >{res.emp_site_name}</option>
                        )
                        )
                    }
                </select>
                    {this.state.emp_site}<br/>
                    DOB <input type="text" value={this.state.dob} onChange={(event)=>this.setState({dob:event.target.value})}  />{this.state.dob}<br/>
                    City <select name="city" value={this.state.city} onChange={(event) => this.setState({ city: event.target.value })}>
                    {
                        projectcityCollection.map(res=>(
                            <option value={res.city_no} >{res.city}</option>
                        )
                        )
                    }
                </select>{this.state.city}<br/>
                {editData.emp_id_no ? <button onClick={this.editData}>Update</button> : <button onClick={this.saveData}>save</button>

                }</div>
                </div>
                </>
            )
        }
    
}
    
    const mapDispatchToProps=(dispatch)=>{
        return {
            
            addprojecttoDb: bindActionCreators(addProjectToDb,dispatch),
            getemployeeSite:bindActionCreators(getemployeesite,dispatch),
            getemployeeCity:bindActionCreators(getemployeecity,dispatch),
            updateEmployee:bindActionCreators(updateEmployee,dispatch),
            editemployee:bindActionCreators(editemployee,dispatch)
        }
    }
    const mapStateToProps = (state) => {
        return {
            projectsiteCollection: state.site,
            projectcityCollection: state.city,
            editData:state.project.editData

        }
    }
    
    
    export default connect(mapStateToProps,mapDispatchToProps) (AddProject)