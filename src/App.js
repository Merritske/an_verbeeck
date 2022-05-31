import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

function App() {
  return (
      <BrowserRouter>    <div className="App">

     PORTFOLIO
<Navbar/> 
     An Verbeeck
    <Intro />

    </div> 
    </BrowserRouter>
  );
}

export default App;
