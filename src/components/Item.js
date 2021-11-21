import React from "react";
import style from "./css/Item.module.css";
function Item(props) {
    const [isCompleted,setCompleted]=React.useState(false);
    const [isDeleted,setDeleted]=React.useState(false);
    const complete_style={
        textDecorationLine: isCompleted&&"line-through",
        
        opacity:isCompleted&&0.3
        

    }
   
    
  const sendKeytoItems = () => {
    
    props.getKey(props.title);
    console.log("Deleted");
    setDeleted(true);
    
    
  };
  const completeHandler=()=>{
      console.log("Completed");
      setCompleted(isCompleted?false:true);
  }
  return (
    // eslint-disable-next-line no-sequences
    <div style={complete_style} className={`${style.item} ${isDeleted&&style.deleted}`}>

      <h1 >{props.title}</h1>
      <button onClick={completeHandler} className={style.completed}>
        <i class="fas fa-check"></i>
      </button>

      <button id="del" onClick={sendKeytoItems} className={style.delete}>
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
  );
}

export default Item;
