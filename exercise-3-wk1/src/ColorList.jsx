import React from 'react'

// Exercise 2: Create a new React component called `ColorList` that renders an unordered list of 
// three different colors, each color as a string in list item. The colors are passed to 
// the ColorList component as props. Create three props named color1, color2, color3. 
// Import the component and render it in the main App component.

const ColorList = ({color}) => {
  return (
    //<div>ColorList</div>
    <div>
        <ul>
            <li>{color}</li>
        </ul>
    </div>
  )
}

export default ColorList