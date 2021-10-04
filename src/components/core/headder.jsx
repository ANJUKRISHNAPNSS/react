// import React from "react"
// import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'


// class Headder extends React.Component{
//     render(){
//         return(
//             <>
//             <div>
//                 <ul>
//                 <h1 style={{backgroundColor:"black",color:"white", textAlign:"center", fontSize:"50px"}}><b>EMPLOYEE MANAGEMENT SYSTEM</b></h1>
//                 <li><Link to="/fulldetails">full details</Link></li>
//                     <li><Link to="/viewProject">view employee Details</Link></li>
//                     <li><Link to="/addproject">Add Employee Details</Link></li>
//                     <li><Link to="/viewwork">View Work details</Link></li>
//                     <li><Link to="/addwork">add Work details</Link></li>
//                     {/* <li><Link to="/fulldetailsbyid">viewbyid</Link></li> */}
//                     <li><Link to="/history">viewHistory</Link></li>
//                     <li><Link to="/addhistory">ADDHistory</Link></li>
//                     <li><Link to="/sitedetails">viewsites</Link></li>
//                     <li><Link to="/hisdetails">viewsiteswith from date</Link></li>
//                     <li><Link to="/iddetails">view details id</Link></li>
//                     <li><Link to="/addsite">Add sites</Link></li>
//                     {/* <li><Link to="/">Home</Link></li> */}
//                     {/* <li><Link to="/addsitedetails">viewsites</Link></li>
//                     <li><Link to="/citydetails">viewcity</Link></li>
//                     <li><Link to="/createcitydetails">createcity</Link></li> */}
//                 </ul>
//             </div>
//             </>
//         )
//     }
// }
// export default Headder
import React from "react"
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import Heading from "./admin";
import employee from "./admin";

class Headder extends React.Component {
    render() {
        return (
            <>
                <div>
                    <ul>
                        <h1 style={{ backgroundColor: "black", color: "white", textAlign: "center", fontSize: "50px" }}><b>EMPLOYEE MANAGEMENT SYSTEM</b></h1>
                        {/* <li><Link to="/fulldetails">full details</Link></li> */}
                        {/* <li><Link to="/viewProject">view employee Details</Link></li>
                    <li><Link to="/addproject">Add Employee Details</Link></li>
                    <li><Link to="/viewwork">View Work details</Link></li>
                    <li><Link to="/addwork">add Work details</Link></li> */}
                        {/* <li><Link to="/fulldetailsbyid">viewbyid</Link></li> */}
                        {/* <li><Link to="/history">viewHistory</Link></li>
                    <li><Link to="/addhistory">ADDHistory</Link></li>
                    <li><Link to="/sitedetails">viewsites</Link></li>
                    <li><Link to="/hisdetails">viewsiteswith from date</Link></li>
                    <li><Link to="/iddetails">view details id</Link></li>
                    <li><Link to="/addsite">Add sites</Link></li> */}

                        {/* <li><Link to="/head">Head</Link></li> */}
                        {/* <li><Link to="/">Home</Link></li> */}
                        {/* <li><Link to="/addsitedetails">viewsites</Link></li>
                    <li><Link to="/citydetails">viewcity</Link></li>
                    <li><Link to="/createcitydetails">createcity</Link></li> */}
                    </ul>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            {/* <Navbar.Brand href="#home" ><Link to="/" style={{ color: 'white', textDecoration: "none" }}>Home</Link></Navbar.Brand> */}
                            <Nav className="me-auto">
                            <Nav.Link href="#home"><Link to="/" style={{ color: 'white', textDecoration: "none" }}><h5>Home</h5></Link></Nav.Link>
                                <Nav.Link href="#home"><Link to="/user" style={{ color: 'white', textDecoration: "none" }}><h5>User</h5></Link></Nav.Link>
                                {/* <Nav.Link href="#features"><li><Link to="/addwork">Add Work details</Link></li></Nav.Link>
      <Nav.Link href="#pricing"><li><Link to="/viewProject">View Employee Detalis</Link></li></Nav.Link> */}

                                {/* <Nav.Link href="#pricing"><li><Link to="/">Head</Link></li></Nav.Link> */}
                                <Nav.Link href="#pricing"><Link to="/head" style={{ color: 'white', textDecoration: "none" }}><h5>Admin</h5></Link></Nav.Link>


                            </Nav>
                        </Container>
                    </Navbar>

                </div>

            </>
        )
    }
}
export default Headder




