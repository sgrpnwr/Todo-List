import React from 'react'
import style from "./css/Items.module.css"
import Item from "./Item"

function Items(props) {
    const getKeyfromItem=(key)=>{
        props.getItemfromItems(key);

    }
    return <div className={style.itemsbox}>
        {props.items.map((item)=><Item getKey={getKeyfromItem} key={`${item}`} title={item}/>)}
    </div>
}

export default Items
