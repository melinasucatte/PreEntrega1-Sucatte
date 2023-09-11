import { useState } from "react"

const ItemCount = ({inicial,stock,onAdd})=>{
    const[counter, setCounter]= useState(inicial)
    const handleAdd = ()=>{
        if(counter < stock){
            setCounter(counter+1)
        }
    }
    const handleSubstract = ()=>{
        if(counter > inicial){
            setCounter(counter-1)
        }
    }
    const handleOnAdd= ()=>{
        onAdd(counter)
    }
    return <center>
        <button onClick={handleAdd}> + </button>
        <label> <strong>{ counter }</strong></label>
        <button onClick={handleSubstract}> - </button>
        <button onClick={handleOnAdd}>Agregar al carrito</button>
    </center>
}
export default ItemCount  