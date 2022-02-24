import "./App.css"
import Home from "./PortfolioContainer/Home/Home";
import Contact from './components/Contact.js'
import Projects from './components/Projects.js'
import Navigation from './components/Navigation';
function App() {
  return (
    <div className="App">
      <Home />
      <Projects />
      <Contact />
      <Navigation />

    </div>
  );
}

export default App;
