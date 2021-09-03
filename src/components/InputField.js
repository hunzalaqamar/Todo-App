import React from 'react'

function InputField(props) {
    
    return (
        <div className="main-body">
            <div className="wrapper">
                <div className="input-data">
                    <input type="text" required value={props.task} onChange={(e)=>props.setTask(e.target.value)}/>
                    <div className="underline">
                    </div>
                    <label>Add Your Task</label>
                </div>
            </div>
        </div>
    )
}

export default InputField
