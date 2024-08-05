import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Header from "./components/header/Header";

function App() {  
  return (
    <div className="App"> 

      <header>
        <Header />
      </header>

      <Routes>
        <Route path="/"  element={ <Home /> }/>
      </Routes>

      <footer>footer</footer>
    </div>
  );
}

export default App;
