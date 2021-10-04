import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getfromtoid } from "../../../redux/action/project.action";
import emp from "../../images/emp.jpg"

class   EmpDetByDate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            emp_site_id: 0,
            from_date: "",
            to_date: ""
        }
    }
    getData = () => {
        this.props.getsitebyidandDate(this.state.emp_site_id, this.state.from_date, this.state.to_date)
    }

    render() {
        let { getbydateCollection } = this.props
        return (
            <div style={{backgroundImage:`url(${emp})`,width:"100%",height:"100%",position:"fixed",backgroundSize:"cover"}}>
                <div style={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                    Id no:<input type="number" onChange={(event) => this.setState({ emp_site_id: event.target.value })} />{this.state.emp_site_id} <br />
                    From Date <input type="date" onChange={(event) => this.setState({ from_date: event.target.value })} />{this.state.from_date} <br />
                    To Date<input type="date" onChange={(event) => this.setState({ to_date: event.target.value })} />{this.state.to_date} <br />
                   
                    <button onClick={this.getData}>GET</button>
                </div>
                <table>
                    <tr>
                        <th>No</th>
                        <th>Employee Id No</th>
                        <th>From date</th>
                        <th>To Date</th>
                        <th>employee site</th>
                        
                    </tr>
                    {
                        getbydateCollection.map(res => (
                            <tr>
                                <td>{res.no}</td>
                                <td>{res.emp_id_no}</td>
                                <td>{res.from_date}</td>
                                <td>{res.to_date}</td>
                                <td>{res.emp_site_no}</td>
                               

                            </tr>
                        ))
                    }
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        getbydateCollection: state.fromto
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        getsitebyidandDate: bindActionCreators(getfromtoid, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EmpDetByDate)