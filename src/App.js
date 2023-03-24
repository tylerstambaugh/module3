import './App.css';
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import { Link, Routes, Route } from 'react-router-dom';
import woof from './assets/images/woof.JPG';


function App() {

  const bird1 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
  );

  const bird2 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
  );

  function toggle1() {
    if (bird1.paused) {
      bird1.play();
    } else {
      bird1.pause();
    }
  };

  function toggle2() {
    if (bird2.paused) {
      bird2.play();
    } else {
      bird2.pause();
    }
  };

  return (
    <div>
      <button onClick={toggle1}>Caspian Tern 1</button>
      <button onClick={toggle2}>Caspian Tern 2</button>
    </div>
  );
}

export default App;

// function App() {
//   const randomImageUrl = "https://4.bp.blogspot.com/_wb8bAl1P-N0/SaaeEru5vCI/AAAAAAAAGQI/ms6zgyAW1t8/s1600/head+to+head.jpg";
//   return (
//     <div>
//       <h1>3 ways to do images in react w/ styling</h1>
//       <img height={500}
//         src={woof}
//         alt="the lone wolf"
//         />
//         <img height={500}
//         src={require("./assets/images/woof.JPG")}
//         alt="lone wolf using require"
//         />
//         <img height={500}
//         src={randomImageUrl}
//         alt="the lone wolf then and now"
//         />
//     </div>
//   );
// }


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

