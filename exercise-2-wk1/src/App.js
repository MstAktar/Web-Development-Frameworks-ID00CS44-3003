import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { ColorList } from './ColorList';
import { ContactItem } from './ContactItem';
import { ContactList } from './ContactList';

function App() {
  return (
    <div> 
      <Header/>
      <ColorList/>
      <ContactItem/>
      <ContactList/>
    </div>

  );
}

export default App;
