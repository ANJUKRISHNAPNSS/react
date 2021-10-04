export const SET_WORK_DATA="SET_WORK_DATA"
export const EDIT_WORK_DETAILS="EDIT_WORK_DETAILS"
//get work details
export const getProjectwork=()=>{
    return(dispatch)=>{
        fetch("http://localhost:4000/work")
        .then(response=>response.json())
        .then(data=>
            dispatch({
                type:SET_WORK_DATA,
                payload:data
            }))
    }
}
//add work details
export const addProjectToDbwork=(data)=>{
    return (dispatch)=>{
        fetch('http://localhost:4000/work/workdata',{
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
export const deleteDataworkdetails=(id)=>{
    return (dispatch)=>{
        fetch(`http://localhost:4000/work/delete/${id}`,{
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            method:'DELETE',
            
        }).then(response=>response.json())//to see as object
        .then(response=>{console.log(response)})
    }
}
export const updatework=(data)=>{

    return{

        type:EDIT_WORK_DETAILS,

        payload:data

    }

}

export const editwork=(data,id)=>{

    return (dispatch)=>{

        fetch(`http://localhost:4000/work/update/${id}`,{

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