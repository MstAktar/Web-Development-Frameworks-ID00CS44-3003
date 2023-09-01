import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { ColorList } from './ColorList';
import { ContactItem } from './ContactItem';

function App() {
  return (
    <div> 
      <Header/>
      <ColorList/>
      <ContactItem/>
    </div>

  );
}

export default App;
