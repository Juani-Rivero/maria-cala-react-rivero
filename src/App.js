import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <ItemListContainer name="Usuario" />
      </main>
    </div>
  );
}

export default App;
