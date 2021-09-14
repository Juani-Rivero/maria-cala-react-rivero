import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import Poke from "./components/Poke/Poke";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <ItemListContainer name="Usuario" />
        <ItemCount />
      </main>
    </div>
  );
}

export default App;
