import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Auth/Login';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home/dashboard' element={<Dashboard />}

    </Routes>
  );
}

export default App;
