import logo from './logo.svg';
import './App.css';
import Greeter from './Greeter';
import ColorList from './ColorList';
import ColorList2 from './ColorList2';
import ContactItem from './ContactItem';
import ContactList from './ContactList';
import ShoppingCart from './ShoppingCart';

const colorList = ["red", "pink", "blue"];

const contactList = [
  {name: "Airen", address: "Finland"},
  {name: "Rachna", address: "Pakistan"},
  {name: "Minhaz", address: "Bangladesh"},
  {name: "Sharif", address: "Finland"}
]

const productList = [
  {name: "Mango", quantity: 2, totalprice: 100},
  {name: "Orange", quantity: 4, totalprice: 200},
  {name: "Apple", quantity: 6, totalprice:300}
]

function App() {
  return (
    <div >
      <Greeter firstNameame="Airen" />
      <Greeter firstName="Sharif" />
      <Greeter firstName="Minhaz" />
      <ColorList color="red" />
      <ColorList color="blue" />
      <ColorList color="green" />
      <ColorList2 colors = {colorList}/>
      <ContactItem name = "Airen" address= "Oulu, Finland"/>
      <ContactItem name = "Minhaz" address= "Bogra"/>
      <ContactItem name = "Sharif" address= "Oulu, Finland"/>
      <ContactList contacts={contactList}/>
      <ShoppingCart products= {productList}/>
    </div>
  );
}

export default App;
