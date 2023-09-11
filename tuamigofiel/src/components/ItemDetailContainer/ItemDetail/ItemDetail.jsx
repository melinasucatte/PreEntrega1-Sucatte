import React from 'react'
import ItemCount from '../../ItemCount/ItemCount'

const ItemDetail = ({producto}) => {
    const onAdd = (count) =>{
        console.log('productos seleccionado:', count)
    }
  return (
    <div className="row">
        <h2>Detalle</h2>
        <div className="col">
            <img src={producto.imageUrl} alt={producto.description} />
            <div>
                <p>Nombre: {producto.name}</p>
                <p>Precio: {producto.price}</p>
                <p>Stock: {producto.stock}</p>
                <p>Descripcion: {producto.description}</p>
            </div>
        </div>
        <div className="col">
            <ItemCount inicial={1} stock={5} onAdd={onAdd}/>
        </div>
        
    </div>
  )
}

export default ItemDetail