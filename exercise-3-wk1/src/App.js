import logo from './logo.svg';
import './App.css';
import Greeter from './Greeter';
import ColorList from './ColorList';

function App() {
  return (
    <div >
      <Greeter firstNameame="Airen" />
      <Greeter firstName="Sharif" />
      <Greeter firstName="Minhaz" />
      <ColorList color="red" />
      <ColorList color="blue" />
      <ColorList color="green" />
    </div>

  );
}

export default App;
