import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { ColorList } from './ColorList';
// import { ContactItem } from './ContactItem';
import { ContactList } from './ContactList';
import ShoppingList from './ShoppingCart'

function App() {

  let productlist = [
    {name: "Lipstick", quantity: 10, totalPrice: 10000},
    {name: "eyebrow pencil", quantity: 1, totalPrice: 500},
    {name: "eyeliner", quantity: 1, totalPrice: 500},
    {name: "shampoo", quantity: 1, totalPrice: 1000},
  ]

  let contactitem = [
    { name: "Airen", address: "Oulu, Finland" },
    { name: "Sharif", address: "Oulu, Finland" },
  ];

  return (
    <div> 
      <Header/>
      <ColorList/>
      {/* <ContactItem contact = { contactitem}/> */}
      <ContactList personcontact = {contactitem} />
      <ShoppingList product = {productlist} />
    </div>

  );
}

export default App;
