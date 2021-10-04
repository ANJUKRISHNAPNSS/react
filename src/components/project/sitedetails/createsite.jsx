import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux'
import {  addsite } from "../../../redux/action/siteaction";
import emp1 from "../../images/emp1.jpg"

class AddProjectsite extends React.Component{


    constructor(){
        super()
        this.state={
            emp_site_no:0,
            emp_site_name:""
            
        }
    }


    saveData=()=>{
        
        this.props.addprojectsite({emp_site_no:this.state.emp_site_no,emp_site_name:this.state.emp_site_name})}
        render(){
            return(
                <>
                <h1><center>ADD SITES</center></h1>
                <div style={{backgroundImage:`url(${emp1})`,width:"100%",height:"100%",position:"fixed",backgroundSize:"cover"}}>
                <div style={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                    employee site no <input type="number" onChange={(event)=>this.setState({emp_site_no:event.target.value})} /><br />
                    
                    city <input type="text" onChange={(event)=>this.setState({emp_site_name:event.target.value})} /><br />
                    
                    <button onClick={this.saveData}>save</button>
                
                </div>
                </div>
                </>
            )
        }
    
}
    
    const mapDispatchToProps=(dispatch)=>{
        return {
            
            addprojectsite: bindActionCreators(addsite,dispatch)
        }
    }
    
    
    
    export default connect(null,mapDispatchToProps) (AddProjectsite)