import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { mFetchOne } from "../../utils/mock"
import ItemDetail from "./ItemDetail/ItemDetail"

import "./ItemDetailContainer.css"




const ItemDetailContainer = () => {
    const [producto,setProducto]= useState({})
    const {pid} = useParams()

    useEffect(()=>{
        mFetchOne(Number(pid))
        .then(resp => setProducto(resp))
        .catch(err=> console.log(err))
    },[])
  return (
    <div>
        <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer
