export const SET_SITE_DATA="SET_SITE_DATA"
export const SET_CITY_DATA="SET_CITY_DATA"
//get employee site
export const getemployeesite=()=>{
    return(dispatch)=>{
        fetch("http://localhost:4000/employeesites")
        .then(response=>response.json())
        .then(data=>
            dispatch({
                type:SET_SITE_DATA,
                payload:data
            }))
    }
}
//get employee city
export const getemployeecity=()=>{
    return(dispatch)=>{
        fetch("http://localhost:4000/cities")
        .then(response=>response.json())
        .then(data=>
            dispatch({
                type:SET_CITY_DATA,
                payload:data
            }))
    }
}
//to delete employee site
export const deletesite=(id)=>{
    return (dispatch)=>{
        fetch(`http://localhost:4000/employeesites/delete/${id}`,{
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            method:'DELETE',
            
        }).then(response=>response.json())//to see as object
        .then(response=>{console.log(response)})
    }
}
//add employee site
export const addsite=(data)=>{
    return (dispatch)=>{
        fetch('http://localhost:4000/employeesites/sites',{
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
