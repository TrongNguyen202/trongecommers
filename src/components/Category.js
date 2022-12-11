import React from 'react'
import CategoryItem from './CategoryItem'
import Categories from '../data/Categories.js'
function Category() {
  
  return (
    <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5  lg:grid-cols-7  mx-auto w-[50vw] xl:w-[100vw] gap-1 mt-2 mb-2'>
    {Categories.map((item,index)=>(
      
      <CategoryItem key={index} name={item.name} image={item.image} />
    )
    
    )}
    </div>
  )
}

export default Category
