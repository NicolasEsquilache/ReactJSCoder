import {Routes,Route} from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailConteiner/ItemDetailContainer";
import CartProvider from "./context/CartProvider";
import Checkout from "./components/Checkout";


function App() {
  return (
    <CartProvider>
      <div style={{ background: '#f0f0f0' }}> 
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </CartProvider>
  );
  
}

export default App;
