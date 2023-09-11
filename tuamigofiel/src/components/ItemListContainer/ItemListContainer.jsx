import { useEffect, useState } from 'react'
import { mFetch } from '../../utils/mock'
import { useParams } from 'react-router-dom'

import ItemList from '../ItemList/ItemList'

import './ItemListContainer.css'



const ItemListContainer = ( ) => {
  const[productos, setProductos] = useState([])
  const[loading, setLoading]= useState(true)
  const {cid} = useParams()
  useEffect(()=>{
    if(cid){
      mFetch()
      .then(respuesta => setProductos(respuesta.filter(producto => cid === producto.category)))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    }else{
      mFetch()
      .then(respuesta => setProductos(respuesta))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    }
  },[cid])

  return (
    <center>
      <div className="row">
        { loading ? <h2>LOADING...</h2> : <ItemList productos={productos} />    }

      </div>
    </center>
  )
}

export default ItemListContainer