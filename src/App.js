import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Nav';
import Skills from './components/Skills/Skills';
import Projects from './components/projects/Projects';

function App() {
  return (
    <>
      <Navbar/>
      <About/>
      <Skills />
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
