


export const SET_PROJECT_DATA="SET_PROJECT_DATA"

export const EDIT_EMP_DETAILS="EDIT_EMP_DETAILS"
export const SET_GETDETAILSDATA_DATA="SET_GETDETAILSDATA_DATA"
export const SET_EMPBYID_DATA="SET_EMPBYID_DATA"
//get employee details 
export const getProject=()=>{
    return(dispatch)=>{
        fetch("http://localhost:4000/employee")
        .then(response=>response.json())
        .then(data=>
            dispatch({
                type:SET_PROJECT_DATA,
                payload:data
            }))
    }
}
//add employee details
export const addProjectToDb=(data)=>{
    return (dispatch)=>{
        fetch('http://localhost:4000/employee/empdet',{
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            method:'POST',
            body:JSON.stringify(data)
        }).then(response=>response.json())//to see as object
        .then(response=>{console.log(response)})
    }
}

//get joined table of employee details
export const getfullProject=()=>{
    return(dispatch)=>{
        fetch("http://localhost:4000/employeefulldetails")
        .then(response=>response.json())
        .then(data=>
            dispatch({
                type:SET_PROJECT_DATA,
                payload:data
            }))
    }
}


//delete employee details
export const deleteDataempdetails=(id)=>{
    return (dispatch)=>{
        fetch(`http://localhost:4000/employee/delete/${id}`,{
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            method:'DELETE',
            
        }).then(response=>response.json())//to see as object
        .then(response=>{console.log(response)})
    }
}

//update employee details
export const updateEmployee=(data)=>{

    return{

        type:EDIT_EMP_DETAILS,

        payload:data

    }

}

export const editemployee=(data,id)=>{

    return (dispatch)=>{

        fetch(`http://localhost:4000/employee/update/${id}`,{

            headers:{

                'accept':'application/json',

                'content-type':'application/json'

            },

            method:'PUT',

            body:JSON.stringify(data)

        })

        .then(response=>response.json())

        .then(response=>{console.log(response)})

    }

}




//get employeees in a particular site
export const getsiteemployee=(id)=>{
    return(dispatch)=>{
        fetch(`http://localhost:4000/employee/site/${id}`)
        .then(response=>response.json())
        .then(data=>
            dispatch({
                type:SET_PROJECT_DATA,
                payload:data
            }))
    }
}

export const getfromtoid=(id,from_date,to_date)=>{
    return(dispatch)=>{
        fetch(`http://localhost:4000/workhistory/work_history/${id}/${from_date}/${to_date}`)
        .then(response=>response.json())
        .then(data=>
            dispatch({
                type:SET_GETDETAILSDATA_DATA,
                payload:data
            }))
    }
}
export const getempbyid=(id,from_date,to_date)=>{
    return(dispatch)=>{
        fetch(`http://localhost:4000/employee/${id}`)
        .then(response=>response.json())
        .then(data=>
            dispatch({
                type:SET_EMPBYID_DATA,
                payload:data
            }))
    }
}

