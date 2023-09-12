import React from 'react'
import ItemCount from '../../ItemCount/ItemCount'

const ItemDetail = ({producto}) => {
    const onAdd = (count) =>{
        console.log('productos seleccionado:', count)
    }
  return (
    <div className="detalle">
        <h2 className='titulo'>DETALLE DEL PRODUCTO</h2>
        <div className="col cuerpo">
            <img src={producto.imageUrl} alt={producto.description} />
            <div className='texto'>
                <p>Nombre: {producto.name}</p>
                <p>Precio: {producto.price}</p>
                <p>Stock: {producto.stock}</p>
                <p>Descripcion: {producto.description}</p>
            </div>
        </div>
        <div className="col agregar">
            <ItemCount inicial={1} stock={5} onAdd={onAdd}/>
        </div>
        
    </div>
  )
}

export default ItemDetail