import React from "react";

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
