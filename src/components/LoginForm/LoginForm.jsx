import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { authOperations } from 'redux/auth';

const Form = styled.form`
  width: 320px;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </Label>
      <Button variant="outlined" type="submit">
        Log In
      </Button>
    </Form>
  );
}

export default LoginForm;
