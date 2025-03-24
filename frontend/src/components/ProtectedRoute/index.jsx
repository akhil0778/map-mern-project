import { Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ element }) => {
  const token = Cookies.get('jwt_token');

  return token ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
