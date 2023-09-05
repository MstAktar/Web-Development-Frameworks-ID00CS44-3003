import React from 'react'

/* Exercise 1: Create a new component called “ConsoleButton”, which renders a single button element 
and uses click handler to print text “Hello from ConsoleButton!” to javascript console 
when the button is clicked by the user. Declare the click handler function inside the “ConsoleButton” 
component. Render the “ConsoleButton” in the App.js.*/

/*Exercise 2: Modify the “ConsoleButton” component so that the component accepts a prop called 
“consoleText” and the prop value is printed to the console, when the button is clicked.*/

function ConsoleButton({consoleText}) {
    function handlerClick(){
        console.log( consoleText );
    }
  return (
    //<div>ConsoleButton</div>

    <button onClick={handlerClick}>
        Click Me!
    </button>
  )
}

export default ConsoleButton

