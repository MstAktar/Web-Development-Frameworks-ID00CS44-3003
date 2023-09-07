import React from 'react'
import ContactItem from './ContactItem'

// Exercise 4: Create a new component to represent a contact list, which can have multiple contact list items in it. You should create a single “ContactList” component, which renders multiple “ContactItem” components. Render the “ContactList” component in the App.js. The “ContactList” component should use props to receive the names and addresses of the persons to render.

function ContactList({contacts}) {
  return (
    //<div>ContactList</div>
    <>
    {contacts.map((x, i)=>
    { return <ContactItem name={x.name} address={x.address}/>
    }
    )}
    </>
  )
}

export default ContactList