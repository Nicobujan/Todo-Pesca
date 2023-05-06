import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import PageNotFound from './Pages/PageNotFound';
import CartContainer from './Components/CartContainer/CartContainer';
import OrderDetail from './Components/OrderDetail/OrderDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './Context/cartContext';
import "./App.css";





function App() {

  
  return (

    
    <CartContextProvider>
      
      <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          
          <Route path="/category/:categoryid" element={<ItemListContainer />} />

          <Route path="/item/:itemid" element={<ItemDetailContainer />} />

          <Route path="/cart" element={<CartContainer />} />

          <Route path="/orders/:orderid" element={<OrderDetail />} />
          
          <Route path="*" element={<PageNotFound />} />
        </Routes>



      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
