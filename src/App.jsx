import { Route, Routes , } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import NotFoundPage from 'pages/NotFoundPages';
import { authOperations } from 'redux/auth';
import { getRefresh } from 'redux/Selectors';
import PublicRoute from 'PublicRoute';
import PrivateRoute from 'PrivateRoute';
import Home from 'pages/Home';
import Contacts from 'pages/Contacts';
import Register from 'pages/Register';
import Login from 'pages/Login';


// const Home = lazy(() => import('pages/Home'));
// const Contacts = lazy(() => import('pages/Contacts'));
// const Register = lazy(() => import('pages/Register'));
// const Login = lazy(() => import('pages/Login'));

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  const isRefresing = useSelector(getRefresh);

  return isRefresing ? (
    <h1>Refreshing user...</h1>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PublicRoute component={<Home />} />} />
          <Route
            path="contacts"
            element={<PrivateRoute component={<Contacts />} />}
          />
          <Route
            path="register"
            element={
              <PublicRoute
                restricted
                redirectTo="contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute
                restricted
                redirectTo="contacts"
                component={<Login />}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
