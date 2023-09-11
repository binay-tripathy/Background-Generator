import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Static from './components/Static/Static';
import Gradient from './components/Gradient/Gradient';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Static />} />
        <Route path='gradient' element={<Gradient />} />
      </Routes>
    </>
  );
}

export default App;
