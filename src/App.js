import './App.css';
import { Route, Routes } from 'react-router-dom'
import Intro from './components/Intro';
import Address from './components/Address';
import Occupation from './components/Occupation';
import Confirmation from './components/Confirmation';

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Intro/>}></Route>
      <Route path='/address' element={<Address/>}></Route>
      <Route path='/occupation' element={<Occupation/>}></Route>
      <Route path='/confirmation' element={<Confirmation/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
