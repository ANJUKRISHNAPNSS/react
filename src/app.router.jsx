// import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import App from "./App";


// import Headder from './components/core/headder';


// import AddProject from './components/project/employeedetails/createproject'
// import NotFound from "./components/core/notfound";
// import {Provider} from "react-redux"
// import { store } from "./redux/store/store";
// import viewProject from "./components/project/employeedetails/viewproject";
// import viewFullProject from "./components/project/employeedetails/fulldetails"
//  import viewwork from "./components/project/workdetails/workprojectview"
//  import Addwork from "./components/project/workdetails/workprojectcreate"
// //  import viewProjectbyId from "./components/project/fulldetailseach"
//  import viewHistory from "./components/project/workhistorydetails/viewemployeehistory"
//  import Addhistory from "./components/project/workhistorydetails/addemployeehistory"
//  import viewSite from "./components/project/sitedetails/viewsite"
//  import EmpDetByDate from "./components/project/workhistorydetails/workhistorybydate"
// import EmpDetById from "./components/project/employeedetails/fulldetailseach"
// import AddProjectsite from "./components/project/sitedetails/createsite"
// const AppRouter=(
//     <Provider store={store}>
//     <Router>
//         {/* <Header></Header> */}
//         {/* <Hyperlink></Hyperlink> */}
//         <Headder></Headder>
//         <Switch>
            
//             <Route exact path="/viewProject" component={viewProject}/>
//             <Route exact path="/addProject" component={AddProject}/>
//             <Route exact path="/viewwork" component={viewwork}/>
//             <Route exact path="/addwork" component={Addwork}/>
//             <Route exact path="/fulldetails" component={viewFullProject}/>
//             {/* <Route exact path="/fulldetailsbyid" component={viewProjectbyId}/> */}
//             <Route exact path="/history" component={viewHistory}/>
//             <Route exact path="/addhistory" component={Addhistory}/>
//             <Route exact path="/sitedetails" component={viewSite}/>
//             <Route exact path="/hisdetails" component={EmpDetByDate}/>
//             <Route exact path="/iddetails" component={EmpDetById}/>
//             <Route exact path="/addsite" component={AddProjectsite}/>
//             {/* <Route exact path="/citydetails" component={viewcity}/>
//             <Route exact path="/createcitydetails" component={AddProjectcity}/>
//             <Route exact path="/addsitedetails" component={AddProjectsite}/> */}
            
            
            
            
//             {/* <Route exact component={NotFound}/> */}
//         </Switch>
        
//     </Router>
//     </Provider>
// )
 
// export default AppRouter


import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";


import Headder from './components/core/headder';


import AddProject from './components/project/employeedetails/createproject'
import NotFound from "./components/core/notfound";
import {Provider} from "react-redux"
import { store } from "./redux/store/store";
import viewProject from "./components/project/employeedetails/viewproject";
import viewFullProject from "./components/project/employeedetails/fulldetails"
 import viewwork from "./components/project/workdetails/workprojectview"
 import Addwork from "./components/project/workdetails/workprojectcreate"
//  import viewProjectbyId from "./components/project/fulldetailseach"
 import viewHistory from "./components/project/workhistorydetails/viewemployeehistory"
 import Addhistory from "./components/project/workhistorydetails/addemployeehistory"
 import viewSite from "./components/project/sitedetails/viewsite"
 import EmpDetByDate from "./components/project/workhistorydetails/workhistorybydate"
import EmpDetById from "./components/project/employeedetails/fulldetailseach"
import AddProjectsite from "./components/project/sitedetails/createsite"
import home from "./components/core/home";
import EmployeeButton from "./components/core/admin";
import Admin from "./components/core/admin";
import User from "./components/core/user";
const AppRouter=(
    <Provider store={store}>
    <Router>
        {/* <Header></Header> */}
        {/* <Hyperlink></Hyperlink> */}
        <Headder></Headder>
        <Switch>
            
            <Route  path="/viewProject" component={viewProject}/>
            <Route  path="/addProject" component={AddProject}/>
            <Route  path="/viewwork" component={viewwork}/>
            <Route  path="/addwork" component={Addwork}/>
            <Route  path="/fulldetails" component={viewFullProject}/>
            {/* <Route exact path="/fulldetailsbyid" component={viewProjectbyId}/> */}
            <Route  path="/history" component={viewHistory}/>
            <Route  path="/addhistory" component={Addhistory}/>
            <Route  path="/sitedetails" component={viewSite}/>
            <Route  path="/hisdetails" component={EmpDetByDate}/>
            <Route path="/iddetails" component={EmpDetById}/>
            <Route  path="/addsite" component={AddProjectsite}/>
            <Route exact path="/" component={home}/>
            <Route exact path="/head" component={Admin}/>
            <Route exact path="/user" component={User}/>
            {/* <Route exact path="/citydetails" component={viewcity}/>
            <Route exact path="/createcitydetails" component={AddProjectcity}/>
            <Route exact path="/addsitedetails" component={AddProjectsite}/> */}
            
            
            
            
            {/* <Route exact component={NotFound}/> */}
        </Switch>
        
    </Router>
    </Provider>
)
 
export default AppRouter


