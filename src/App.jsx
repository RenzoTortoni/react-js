import "./App.css"
import NavBar from "./components/navbar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido a Gaming Fast Store"}/>
    </div>
  )
}

export default App