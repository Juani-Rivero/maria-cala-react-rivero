import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailConotainer";


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <ItemListContainer name="Usuario" />
        <ItemCount />
        <ItemDetailContainer />
      </main>
    </div>
  );
}

export default App;
