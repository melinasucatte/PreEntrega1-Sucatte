import {BrowserRouter, Routes, Route} from 'react-router-dom';

import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:cid' element={<ItemListContainer/>}/>
            <Route path='/detalle/:pid' element={<ItemDetailContainer/>}/>
          </Routes>
    </BrowserRouter>

  )
}

export default App
