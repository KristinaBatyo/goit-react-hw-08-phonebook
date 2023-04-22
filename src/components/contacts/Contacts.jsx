import ContactsListRender from '../list/ContactsList';
import ContactsForm from 'components/form/ContactsForm';
import Filter from 'components/filter/Filter';
import { Title } from 'components/app/App.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getLoading, getError, getContacts } from 'redux/selectors';

 const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
      <>
        <Title>Phonebook</Title>
        <ContactsForm />
        <Title>Contacts</Title>
        <Filter />
        {isLoading && <p>Loading tasks...</p>}
        {error && <p>{error}</p>}
        {contacts.length > 0 && <ContactsListRender />}
      </>
  );
 };

export default Contacts;
