import React from 'react'
import { deleteToDo } from '../actions/actionCreator'
import { useDispatch } from 'react-redux'


function ShowItems({data, toDel}) {
    
    const dispatch = useDispatch();

    return (
        
        <ul className="wrapperforshowitems">
        <h2 style={{textAlign:'center'}}>Tasks To Do: </h2>
        {
            data.map((elem)=>{
            return (
            <div>
            <li key={elem.id}><h4>{elem.data}<i style={{float:'right'}} className="far fa-trash-alt add-btn" title="Delete Item" onClick={()=>dispatch(deleteToDo(elem.id))}></i></h4></li>
            </div>
            )})
        }
        </ul>
    )
}

export default ShowItems
