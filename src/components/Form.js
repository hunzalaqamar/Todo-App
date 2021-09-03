import React, {useState} from 'react'
import { addToDo, deleteToDo } from '../actions/actionCreator'
import {connect} from 'react-redux'
import ButtonComp from './ButtonComp'
import InputField from './InputField'
import ShowItems from './ShowItems'


function Form({todos,addToDo, deleteToDo}) {
    const [inputData, setInputData] = useState('');
    
    return (
        <div>
            <div  style={{display: "flex", justifyContent: "center" , marginTop: "5rem" }}>
            <InputField task={inputData} setTask={setInputData}/>
            <ButtonComp performthis={()=>addToDo(inputData)}/>
            </div>
            <div>
            <ShowItems data={todos} toDel={()=>deleteToDo()}/>
            </div>

        </div>
    )
}

const mapStateToProps = state =>{
    return{
        todos: state.todoReducers.list
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        addToDo:(input)=>{
            dispatch(addToDo(input))
        },
        deleteToDo:(input)=>{
            dispatch(deleteToDo(input))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form) 
