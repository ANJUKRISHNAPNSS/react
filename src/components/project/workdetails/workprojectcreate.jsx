// import React from "react";
// import { connect } from "react-redux";
// import {bindActionCreators} from 'redux'
// import {  addProjectToDbwork } from "../../../redux/action/project.action";


// class Addwork extends React.Component{


//     constructor(){
//         super()
//         this.state={
//             work_id:0,
//             emp_id_no:0,
//             work_hours:0,
//             from_date:"0000/00/00",
//             to_date:"0000/00/00",
            
//             monthly_salary:0
//         }
//     }


//     saveData=()=>{
        
//         this.props.addprojectworktoDb({work_id:this.state.work_id,emp_id_no:this.state.emp_id_no,work_hours:this.state.work_hours,from_date:this.state.from_date,to_date:this.state.to_date,monthly_salary:this.state.monthly_salary})}
        
        
//         render(){
//             return(
//                 <div>
//                     work id <input type="number" onChange={(event)=>this.setState({work_id:event.target.value})} />{this.work_id} <br />
//                     id <input type="number" onChange={(event)=>this.setState({emp_id_no:event.target.value})} />{this.state.emp_id_no} <br />
//                     work hours <input type="number" onChange={(event)=>this.setState({work_hours:event.target.value})}  />{this.state.work_hours}<br/>
//                     from date <input type="date" onChange={(event)=>this.setState({from_date:event.target.value})}  />{this.state.from_date}<br/>
//                     to date <input type="date" onChange={(event)=>this.setState({to_date:event.target.value})}  />{this.state.to_date}<br/>
//                     salary <input type="number" onChange={(event)=>this.setState({monthly_salary:event.target.value})}  />{this.state.monthly_salary}<br/>
                    
//                     <button onClick={this.saveData}>save</button>
//                 </div>
//             )
//         }
    
// }
    
//     const mapDispatchToProps=(dispatch)=>{
//         return {
            
//             addprojectworktoDb: bindActionCreators(addProjectToDbwork,dispatch)
//         }
//     }
    
    
    
//     export default connect(null,mapDispatchToProps) (Addwork)



import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux'
import {   editwork, updatework } from "../../../redux/action/workaction";
import {addProjectToDbwork} from"../../../redux/action/workaction"
import emp from "../../images/emp.jpg"
class Addwork extends React.Component{


    constructor(props){
        super(props)
        this.state={
            work_id:this.props.editData.work_id?this.props.editData.work_id:"",
            emp_id_no:this.props.editData.emp_id_no?this.props.editData.emp_id_no:"",
            work_hours:this.props.editData.work_hours?this.props.editData.work_hours:"",
            from_date:this.props.editData.from_date?this.props.editData.from_date:"",
            to_date:this.props.editData.to_date?this.props.editData.to_date:"",
            
            monthly_salary:this.props.editData.monthly_salary?this.props.editData.monthly_salary:0
        }
    }


    saveData=()=>{
        
        this.props.addprojectworktoDb({work_id:this.state.work_id,emp_id_no:this.state.emp_id_no,work_hours:this.state.work_hours,from_date:this.state.from_date,to_date:this.state.to_date,monthly_salary:this.state.monthly_salary})}
        editData = () => {

            this.props.editwork(this.state, this.props.editData.work_id)
            console.log(this.state)
    
            this.props.updatework({})
    
            this.props.history.push('/viewwork')
        }   
        
        render(){
            let {editData}=this.props
            return(
                <div style={{backgroundImage:`url(${emp})`,width:"100%",height:"100%",position:"fixed",backgroundSize:"cover"}}>
                <div style={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                    work id <input type="number" value={this.state.work_id} onChange={(event)=>this.setState({work_id:event.target.value})} />{this.work_id} <br />
                    id <input type="number" value={this.state.emp_id_no} onChange={(event)=>this.setState({emp_id_no:event.target.value})} />{this.state.emp_id_no} <br />
                    work hours <input type="number" value={this.work_hours} onChange={(event)=>this.setState({work_hours:event.target.value})}  />{this.state.work_hours}<br/>
                    from date <input type="date" value={this.state.from_date} onChange={(event)=>this.setState({from_date:event.target.value})}  />{this.state.from_date}<br/>
                    to date <input type="date" value={this.state.to_date} onChange={(event)=>this.setState({to_date:event.target.value})}  />{this.state.to_date}<br/>
                    salary <input type="number" value={this.state.monthly_salary} onChange={(event)=>this.setState({monthly_salary:event.target.value})}  />{this.state.monthly_salary}<br/>
                    
                    {editData.emp_id_no ? <button onClick={this.editData}>Update</button> : <button onClick={this.saveData}>save</button>

}
                </div>
                </div>
            )
        }
    
}
    
    const mapDispatchToProps=(dispatch)=>{
        return {
            
            addprojectworktoDb: bindActionCreators(addProjectToDbwork,dispatch),
            updatework:bindActionCreators(updatework,dispatch),
            editwork:bindActionCreators(editwork,dispatch)
        }
    }
    const mapStateToProps = (state) => {
        return {
            
            editData:state.work.editData

        }
    }
    
    
    export default connect(mapStateToProps,mapDispatchToProps) (Addwork)