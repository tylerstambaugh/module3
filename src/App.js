import './App.css';
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import { Link, Routes, Route } from 'react-router-dom';
import woof from './assets/images/woof.JPG';


function App() {
  const randomImageUrl = "https://4.bp.blogspot.com/_wb8bAl1P-N0/SaaeEru5vCI/AAAAAAAAGQI/ms6zgyAW1t8/s1600/head+to+head.jpg";
  return (
    <div>
      <h1>3 ways to do images in react w/ styling</h1>
      <img height={500}
        src={woof}
        alt="the lone wolf"
        />
        <img height={500}
        src={require("./assets/images/woof.JPG")}
        alt="lone wolf using require"
        />
        <img height={500}
        src={randomImageUrl}
        alt="the lone wolf then and now"
        />
    </div>
  );
}


// routing ----------------------------------
// function App() {
//   return (
//     <div className="App">
//       <nav className='nav'>
//         <Link to="/" className="nav-item">Homepage</Link>
//         <Link to="/about-me" className='nav-item'>About Me</Link>
//         <Link to="/contact" className='nav-item'>Contact</Link>
//       </nav>
//       <Routes>
//       <Route path="/" element={<Homepage />} />
//       <Route path="/about-me" element={<AboutMe />} />
//       <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </div>
//   );
// }

export default App;
