import React from "react";

/*Exercise 3: Create a new React component as a separate file to represent a person in a contact list, 
the component name is “ContactItem”. 
The person item should look roughly like in the UI wireframe below. 
The “Name” should be with big bold letters and “address” with smaller letters. 
Add some whitespace padding and borders for the ContactItem. 
Use the component to render multiple contact list items below each other in the App root component. 
For styling you can use normal CSS styling and modify the index.css file.*/

export const ContactItem = () => {
  let contactitem = [
    { name: "Airen", address: "Oulu, Finland" },
    { name: "Sharif", address: "Oulu, Finland" },
  ];
  return (
    //<div>ContactItem</div>
    <>
      <div>
        {contactitem.map((person) => {
          return (
            <div className="contactitem" >
              <h2> {person.name} </h2>
              <p> {person.address} </p>
            </div>
          );
        })}
      </div>
    </>
  );
};
