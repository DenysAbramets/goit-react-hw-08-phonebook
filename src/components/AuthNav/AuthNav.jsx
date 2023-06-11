import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;

  &.active {
    color: #ff0000;
  }
`;
function AuthNav() {
  return (
    <nav>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </nav>
  );
}

export default AuthNav;
