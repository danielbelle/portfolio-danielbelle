import './App.css';
import About from './Components/About';
import Nav from './Components/Nav';
import Profile from './Components/Profile'
import Experiences from './Components/Experiences';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Carousel from './Components/Carousel';

function App() {
  return (
    <div className="App">
      <Nav />
      <Profile />
      <About />
      <Projects />{/*
      <Contact />
      <Footer />
      <Experiences />
      */}
    </div>
  );
}

export default App;
