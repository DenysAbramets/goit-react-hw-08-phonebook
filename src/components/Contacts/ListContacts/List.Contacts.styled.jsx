import styled from '@emotion/styled';
import { Button } from '@mui/material';


export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  height: 50px;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Description = styled.p`
  color: #000;
  text-decoration: none;
  font-size: 1.2rem;
`;
export const But = styled(Button)`
  height: 35px;
  margin-left: 15px;
  border-radius: 5px;
`;
