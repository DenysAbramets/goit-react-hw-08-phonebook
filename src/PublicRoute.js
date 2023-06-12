import { getStatus } from 'redux/Selectors';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PublicRoute({
  restricted = false,
  redirectTo = 'goit-react-hw-08-phonebook/',
  component: Component,
}) {
  const isLoggedIn = useSelector(getStatus);
  return isLoggedIn && restricted ? <Navigate to={redirectTo} /> : Component;
}
