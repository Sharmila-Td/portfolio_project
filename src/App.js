import './App.css';
import './index.css'
// import About from './Components/About/About';
// import Contact from './Components/Contact/Contact';
// import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
// import Portfolio from './Components/Portfolio/Portfolio';
// import Service from './Components/Service/Service';
// import Skill from './Components/Skill/Skill';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='main'>
          {/* <Home/>
          <About/>
          <Skill/>
          <Service/>
          <Portfolio/>
          <Contact/> */}
      </div>
    </div>
  );
}

export default App;
