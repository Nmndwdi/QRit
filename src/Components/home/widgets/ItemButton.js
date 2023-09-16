import React from 'react'

function ItemButton({onClick}) {
  return (
    <>
        <button onClick={onClick}>Update</button>
        <button onClick={onClick}>Delete</button>
    </>
  )
}

export default ItemButton