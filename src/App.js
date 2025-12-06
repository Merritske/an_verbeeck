import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skillz from "./components/Skillz";

function App() {
  return (
      <BrowserRouter>    <div className="App">
{/* responsive first */}
     PORTFOLIO
<Navbar/> 
     An Verbeeck
    <Intro />
    <Intro />
    <Intro />
    <Intro />
    <Intro />
<Projects />
<Projects/>
<Skillz/>
<Contact />
    </div> 
    </BrowserRouter>
  );
}

export default App;
