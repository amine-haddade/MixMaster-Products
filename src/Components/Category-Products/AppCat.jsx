import './style.css'
import menu from './Data'
import AllCategoryButton from './AllCategoryButton'
import { useEffect, useState } from 'react'
import Menu from './Menu'
function AppCat() {
  const [items,setItems]=useState(menu)
  const [itemsList,setItemsList]=useState(menu)

  const categories=['all',...new Set(itemsList.map((ele)=>ele.category))]

  function filterCatego(category){
    if (category==='all'){
      setItems(menu)
      return
    }
    const NewList=itemsList.filter((ele)=>ele.category===category)
    setItems(NewList)
  }
 

  return (

    <div className="main-our-project">
        <h1>Our project</h1>
        <AllCategoryButton category={categories}  filtecate={filterCatego}  />
        <Menu  list={items}/>

    </div>
  )
}

export default AppCat
