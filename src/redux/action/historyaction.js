
export const SET_HISTORY_DATA="SET_HISTORY_DATA"
export const getemployeeHistory=()=>{
    return(dispatch)=>{
        fetch("http://localhost:4000/workhistory")
        .then(response=>response.json())
        .then(data=>
            dispatch({
                type:SET_HISTORY_DATA,
                payload:data
            }))
    }
}
//add history
export const addProjectToDbhistory=(data)=>{
    return (dispatch)=>{
        fetch('http://localhost:4000/workhistory/workhistory',{
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
export const deleteDataworkhistory=(id)=>{
    return (dispatch)=>{
        fetch(`http://localhost:4000/workhistory/delete/${id}`,{
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            method:'DELETE',
            
        }).then(response=>response.json())//to see as object
        .then(response=>{console.log(response)})
    }
}