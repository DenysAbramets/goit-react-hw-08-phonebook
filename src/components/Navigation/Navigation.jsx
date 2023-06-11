import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledLink = styled(NavLink)`
  color: black;
  margin-right: 15px;
  text-decoration: none;

  &.active {
    color: #ff0000;
  }
`;

function Navigation() {
  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/contacts">Contacts</StyledLink>
    </nav>
  );
}

export default Navigation;
