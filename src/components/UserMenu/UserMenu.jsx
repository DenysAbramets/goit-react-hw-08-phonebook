import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { getName } from 'redux/Selectors';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { Button } from '@mui/material';
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
`;
const UserName = styled.p`
  font-weight: 700;
`;

const UserMenu = () => {
  const name = useSelector(getName);
  const dispatch = useDispatch();

  console.log(name.name);
  return (
    <Wrapper>
      <UserName>Welcome, {name.name} </UserName>
      <Button
        color="inherit"
        variant="outlined"
        type="button"
        size="small"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </Button>
    </Wrapper>
  );
};
export default UserMenu;
