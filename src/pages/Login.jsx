import LoginForm from 'components/LoginForm/LoginForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Login() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Log in</title>
        </Helmet>
        <LoginForm />
      </div>
    </HelmetProvider>
  );
}

export default Login;
