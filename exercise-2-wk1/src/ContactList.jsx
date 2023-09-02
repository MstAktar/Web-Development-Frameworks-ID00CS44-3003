import React from 'react'
import { ContactItem } from './ContactItem'

/*Exercise 4: Create a new component as a separate file to represent a contact list, 
which can have multiple contact list items in it. 
You should create a single “ContactList” component, which renders multiple “ContactItem” components. 
For this the “ContactList” component must import “ContactItem” component. 
Render the “ContactList” component in the App.js. 
The rendered “ContactItem” components can be identical at this moment.*/

export const ContactList = () => {
  return (
    //<div>ContactList</div>
    <div>
        <ContactItem/> 
    </div>
  )
}
