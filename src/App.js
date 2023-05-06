import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from './Context/cartContext';
import "./App.css";
import { getSingleItem, initFirebase, testApp } from "./Datos/firebase";



function App() {
  
  getSingleItem()
  return (
    
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
