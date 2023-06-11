import React from 'react';
import PropTypes from 'prop-types';
import { But, Description, List, ListItem } from './List.Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../../redux/Contacts/operations';
import { getConctacs, getFilter, getLoading } from 'redux/Selectors';
import { Delete } from '@mui/icons-material';

const ListContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getConctacs);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getLoading);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {isLoading && <b>Loading contacts...</b>}
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <Description>
            {name}: {number}
          </Description>
          <But
            size="small"
            variant="outlined"
            startIcon={<Delete />}
            data-id={id}
            onClick={() => dispatch(deleteContacts(id))}
          >
            Delete
          </But>
        </ListItem>
      ))}
    </List>
  );
};

ListContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ListContacts;
