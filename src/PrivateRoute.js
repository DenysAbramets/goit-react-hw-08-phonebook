import { getStatus, getRefresh } from 'redux/Selectors';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function PrivateRoute({
  component: Component,
  redirectTo = '/login',
}) {
  const isLoggedIn = useSelector(getStatus);
  const isRefreshing = useSelector(getRefresh);
  console.log(isLoggedIn);
  console.log(isLoggedIn);
  return !isLoggedIn && !isRefreshing ? <Navigate to={redirectTo} /> : Component;
}
