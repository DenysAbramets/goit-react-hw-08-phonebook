import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { getStatus } from 'redux/Selectors';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: 1px solid #2a363b;
`;

export const AppBar = () => {
  const isLoggedIn = useSelector(getStatus);
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}

    </Header>
  );
};
