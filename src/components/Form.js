import React from 'react'
import style from "./css/Form.module.css"

function Form(props) {
    const [value,setValue]=React.useState("");
    const inputHandler=(e)=>{
        e.preventDefault();
        setValue(e.target.value)

    }
    const submitHandler=()=>{
    props.sendItemtoApp(value);
    setValue("")

    }
    const keyPressHandler=(e)=>{
        if(e.code==="Enter"){
            submitHandler();
        }
    }
    return (
        
            <div>
            
                <input onKeyPress={keyPressHandler} onChange={inputHandler} className={style.inputbox} type="text" value={value}/>
                <button onClick={submitHandler} className={style.add} type="submit"><i class="fas fa-plus-circle"></i></button>
            
        </div>
        
    )
}

export default Form
