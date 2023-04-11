import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFoundPage from './pages/NotFoundPage'
import Home from './pages/Home';
import AuthProvider from './context/AuthContext';

function App() {
  return (
  <div>
    <h1> Routes </h1>
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='home' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </AuthProvider>
  </div>
  );
}

export default App;
