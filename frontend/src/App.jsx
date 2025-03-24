import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Map from './components/Map';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/map" element={<ProtectedRoute element={<Map />} />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
