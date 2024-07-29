import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import MealKits from "./routes/mealkits/MealKits";

function App() {  
  return (
    <div className="App"> 
       <header>
          <ul className="flex gap-48">
            <li> <a href="/mealkits">MealKits</a></li>
          </ul>
       </header>

       <Routes>
          <Route path="/"  element={ <Home /> }/>
          <Route path="/mealkits"  element={ <MealKits /> } />
       </Routes>

       <footer>footer</footer>
    </div>
  );
}

export default App;
