import React from 'react'

export const ColorList = () => {

    let colorlist = ["Black", "Blue", "Pink"]

  return (
    //<div>ColorList</div>
    <> 
    <ul>
       {colorlist.map((x)=>{
        return <li> {x} </li>
       }
       )}
    </ul>
    </>
  )
}
