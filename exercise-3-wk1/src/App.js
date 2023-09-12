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
  {id: 1, name: "Airen", address: "Finland"},
  {id: 2,name: "Rachna", address: "Pakistan"},
  {id: 3,name: "Minhaz", address: "Bangladesh"},
  {id: 4,name: "Sharif", address: "Finland"}
]

const productList = [
  {name: "Mango", quantityInCart: 2, totalPrice: 1},
  {name: "Orange", quantityInCart: 4, totalPrice: 2},
  {name: "Apple", quantityInCart: 6, totalPrice:3}
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
