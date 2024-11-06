
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import GalleryPage from './Components/Gallery/GalleryPage';
import Aboutpage from './Components/About/Aboutpage';
import Eventpage from './Components/Event/Eventpage';
import Servicepage from './Components/Service/Servicepage';
import Contact from './Components/Contact/Contact';

function App() {
  return (
   <>
   
    <Routes>
      <Route path = '/' element={<Home/>} />
      <Route path = '/gallery' element={<GalleryPage/>} />
      <Route path = '/about' element={<Aboutpage/>} />
      <Route path='/event' element={<Eventpage/>} />
      <Route path='/service' element={<Servicepage />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  
   </>
  );
}

export default App;
