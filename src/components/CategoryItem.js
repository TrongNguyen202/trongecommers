import React from 'react'

function CategoryItem({name, image}) {
  
  return (
    <div className='border border-indigo-600 hover:bg-slate-100 text-center cursor-pointer w-100 h-100'>
    <div className='d-flex flex-column justify-content-center align-items-center  '>
      <img className='img-thumbnail w-100 h-100' src={image} alt={name} />
      <p>{name}</p>
    </div>
    </div>
  )
}

export default CategoryItem
