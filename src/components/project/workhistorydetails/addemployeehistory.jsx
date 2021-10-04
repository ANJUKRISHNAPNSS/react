import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux'
import {  addProjectToDbhistory } from "../../../redux/action/historyaction";
import { getemployeesite } from "../../../redux/action/siteaction";
import emp from "../../images/emp.jpg"
class Addhistory extends React.Component{


    constructor(props){
        super(props)
        this.state={
            no:0,
            
            emp_id_no:0,
            
            from_date:"0000/00/00",
            to_date:"0000/00/00",
            emp_site_no:1,
            
        }
        this.props.getemployeeSite()
    }


    saveData=()=>{
        
        this.props.addprojecthistorytoDb({no:this.state.no,emp_id_no:this.state.emp_id_no,from_date:this.state.from_date,to_date:this.state.to_date,emp_site_no:this.state.emp_site_no})}
        render(){
            let {projectsiteCollection}=this.props
            return(
                <>
                <div style={{backgroundImage:`url(${emp})`,width:"100%",height:"100%",position:"fixed",backgroundSize:"cover"}}>
                <div style={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                    no <input type="number" onChange={(event)=>this.setState({no:event.target.value})} />{this.no} <br />
                    id <input type="number" value={this.state.emp_id_no} onChange={(event)=>this.setState({emp_id_no:event.target.value})} />{this.state.emp_id_no} <br />
                    
                    from date <input type="date" onChange={(event)=>this.setState({from_date:event.target.value})}  />{this.state.from_date}<br/>
                    to date <input type="date" onChange={(event)=>this.setState({to_date:event.target.value})}  />{this.state.to_date}<br/>
                    site <select name="site" onChange={(event) => this.setState({ emp_site_no: event.target.value })}>
                    {
                        projectsiteCollection.map(res=>(
                            <option value={res.emp_site_no} >{res.emp_site_name}</option>
                        )
                        )
                    }
                </select>{this.state.emp_site_no}<br/>
                   
                    
                    <button onClick={this.saveData}>save</button>
                </div>
                </div>
                </>
            )
        }
    
}
    
    const mapDispatchToProps=(dispatch)=>{
        return {
            
            addprojecthistorytoDb: bindActionCreators(addProjectToDbhistory,dispatch),
            getemployeeSite: bindActionCreators(getemployeesite,dispatch)
        }
    }
    const mapStateToProps = (state) => {
        return {
            projectsiteCollection: state.site,
           

        }
    }
    
    
    export default connect(mapStateToProps,mapDispatchToProps) (Addhistory)