import React from 'react'

/*Exercise 3: Create a new component called “AlertButton”. 
The alert button should display a browser alert dialog when clicked.*/

/*Exercise 4: Modify the “AlertButton” so that the component accepts a prop called “alertText” and 
the prop value is printed to the console, when the button is clicked.*/

function AlertButton({alertText}) {

    function click(){
        alert(alertText);
    }
  return (
    //<div>AlertButton</div>
    <>
    <button onClick= {click}>
        Alert!
    </button>
    </>
  )
}

export default AlertButton