import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import Notification from './Notification/Notification';
import { useSelector } from 'react-redux';
import { selectContacts } from '../reduxe/contactsSlice';

function App() {
  const contacts = useSelector(selectContacts);

  return (
    <div className="main">
      <h1>Phonebook</h1>

      <ContactForm />

      <SearchBox />

      {contacts?.length ? <ContactList /> : <Notification />}
    </div>
  );
}

export default App;
