//import { useState } from 'react'

//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div>
          <NavBar/>
          <ItemListContainer greeting={'BIENVENIDOS A TU AMIGO FIEL'}/>
    </div>

  )
}

export default App
