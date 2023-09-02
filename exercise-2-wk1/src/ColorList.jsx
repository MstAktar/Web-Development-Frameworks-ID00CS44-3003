import React from 'react'

/*Exercise 2: Create a new React component as a separate file called `ColorList` 
that renders an unordered list of three different colors, each color as a string in list item. 
The colors are defined in the ColorList component and are always the same. 
Import the component and render it in the main App component.*/

export const ColorList = () => {

    let colorlist = ["Black", "Blue", "Pink"]

  return (
    //<div>ColorList</div>
    <> 
    <ul>
       {colorlist.map((x, index)=>{
        return <li key = {index}> {x} </li>
       }
       )}
    </ul>
    </>
  )
}
