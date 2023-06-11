import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { getName } from 'redux/Selectors';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
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
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </Wrapper>
  );
};
export default UserMenu;
