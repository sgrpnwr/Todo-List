import Items from "./components/Items"
import Form from "./components/Form"
import style from "./components/css/App.module.css"
import React from "react";
import {Howl} from "howler"
function App() {
const [items,setItems]=React.useState(["Buy Groceries","Meeting @11","Pick up Stella @8"]);
const [count,setCount]=React.useState(0);

const getItemfromForm=(item)=>{
console.log(item+" in App");
if(items.map(item=>item.toLocaleLowerCase()).indexOf(item.toLocaleLowerCase())>=0){
  alert("Already added, Please add another task")
}else{
setItems(prevValues=>{
  return [...prevValues,item]
})}
}
const getItemfromItems=(item)=>{
  
  var sound=new Audio("../Audio/delete.mp3")
  sound.play();
  setTimeout(function(){setItems(prevValues=>{
    return [...prevValues].filter(value=>value!==item);
  })},300);
  
}


  return (
    <div className={style.App}>
    <h1 className={style.todo}>To-do List</h1>
    <Form sendItemtoApp={getItemfromForm}/>  
    <Items getItemfromItems={getItemfromItems} items={items}/>

      
    </div>
  );
}

export default App;
