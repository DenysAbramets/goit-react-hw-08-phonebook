import styled from '@emotion/styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth/';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
const Form = styled.form`
  width: 320px;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
const Buttons = styled(Button)`
  margin-right: 10px;
`;

function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        Username
        <input type="text" name="name" value={name} onChange={handleChange} />
      </Label>
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
      <Buttons variant="outlined" type="submit">
        Register
      </Buttons>
      <NavLink to="/login">
        <Buttons variant="outlined" type="submit">
          I have account{' '}
        </Buttons>
      </NavLink>
    </Form>
  );
}

export default RegisterForm;
