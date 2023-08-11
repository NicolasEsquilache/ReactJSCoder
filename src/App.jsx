import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return(
    <div>
      <Navbar/>
      <ItemListContainer greeting= "Me salió"/>
    </div>
  )
}

export default App
