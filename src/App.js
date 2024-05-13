import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <About/>
      <Gallery/>
      <Contact/>
    </div>
  );
}

export default App;
