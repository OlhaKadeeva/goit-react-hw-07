import "./App.css";
import ContactList from "../src/components/ContactList/ContactList";
import ContactForm from "../src/components/ContactForm/ContactForm";
import SearchBox from "../src/components/SearchBox/SearchBox";

const App = () => (
  <div style={{ padding: 20 }}>
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <SearchBox />
    <ContactList />
  </div>
);

export default App;
