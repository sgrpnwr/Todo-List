import React from "react";
import style from "./css/Form.module.css";

function Form(props) {
  const [value, setValue] = React.useState("");
  const [emptyStyle, setEmptyStyle] = React.useState(false);
  const inputHandler = (e) => {
      if(value){
          setEmptyStyle(false)
      }
    e.preventDefault();
    setValue(e.target.value);
  };
  const submitHandler = () => {
    if (value) {
      setEmptyStyle(false);

      props.sendItemtoApp(value);
    } else {
      setEmptyStyle(true);
      alert("Submitting an empty string as a task is not allowed");
    }
  };
  const keyPressHandler = (e) => {
    if (e.code === "Enter") {
      submitHandler();
    }
  };
  return (
    <div>
      <input
        style={{ backgroundColor: emptyStyle && "#AE431E" }}
        onKeyPress={keyPressHandler}
        onChange={inputHandler}
        className={style.inputbox}
        type="text"
        value={value}
      />
      <button onClick={submitHandler} className={style.add} type="submit">
        <i class="fas fa-plus-circle"></i>
      </button>
    </div>
  );
}

export default Form;
