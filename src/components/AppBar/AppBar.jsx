import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { getStatus } from 'redux/Selectors';
import AppBar from '@mui/material/AppBar';
import { Typography } from '@mui/material';

const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  margin-bottom: 15px;
`;

export const AppBars = () => {
  const isLoggedIn = useSelector(getStatus);
  return (
    <AppBar position="static">
      <Header>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="https://denysabramets.github.io/goit-react-hw-08-phonebook/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'inline' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          PhoneBook
        </Typography>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
    </AppBar>
  );
};
