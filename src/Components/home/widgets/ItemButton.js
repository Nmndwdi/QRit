import React from 'react'

function ItemButton({onDelete,onUpdate}) {
  return (
    <>
        <button onClick={onUpdate}>Update</button>
        <button onClick={onDelete}>Delete</button>
    </>
  )
}

export default ItemButton