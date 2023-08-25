import {Routes,Route} from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailConteiner/ItemDetailContainer";


function App() {
  return(
    <div>
      <Navbar />
      <Routes>
      <Route path= "/" element={<ItemListContainer/>} />
      <Route path= "/category/:categoryId" element={<ItemListContainer/>} />
      <Route path= "/item/:id" element={<ItemDetailContainer/>} />
  
     </Routes>
    </div>
  );
}

export default App;
