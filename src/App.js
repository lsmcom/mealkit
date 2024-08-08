import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./routes/home/Home";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

function App() {  
  return (
    <div className="App"> 

      <header>
        <Header />
        <Navbar />
      </header>

      <Routes>
        <Route path="/"  element={ <Home /> }/>
      </Routes>

      <footer>footer</footer>
    </div>
  );
}

export default App;
