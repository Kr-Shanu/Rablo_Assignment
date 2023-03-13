import './App.css';
import { Route, Routes } from 'react-router-dom'
import Intro from './components/Intro';
import Address from './components/Address';
import Contact from './components/Contact';
import Success from './components/Success';

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Intro/>}></Route>
      <Route path='/address' element={<Address/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/success' element={<Success/>}></Route>
      {/* <Route path='/confirmation' element={<Confirmation/>}></Route> */}
    </Routes>
    </div>
  );
}

export default App;
