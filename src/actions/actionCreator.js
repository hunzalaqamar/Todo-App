
export const addToDo = (data) =>{
    return{
        type: "ADD_TODO",
        payload:{
            id: Math.random(),
            data: data
        }
    }
}

export const deleteToDo = (id) =>{
    return{
        type:"DELETE_TODO",
        id
    }
}