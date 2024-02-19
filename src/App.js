import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/plants' element={<PlantLibrary />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
