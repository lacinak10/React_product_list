import SearchBar from './SearchBar.jsx'
import ProductCategory from './ProductCategory.jsx'
import { useState } from 'react'
import In_array from "./functions.js"

const PRODUCTS = [  
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
  {category: "Vegetables", price: "$1", stocked: false, name: "Peas"}  
]



function App() {
  const [checked,setcheck]=useState(false)
  const [searched,setSearched]=useState('')


  const category = []
    category.push(PRODUCTS[0].category)
    PRODUCTS.forEach((element) => {
        if (In_array(category, element.category) === false) {
            category.push(element.category)
        }
    })

  const showProduct=PRODUCTS.filter(e=>{
    if(checked && !e.stocked){
    return false
   }
   if(searched && !e.name.toUpperCase().includes(searched.toUpperCase())){
    return false
   }
   return true
})

 


  return (
    <>
      <SearchBar onCheck={setcheck} check={checked} search={searched} onSearch={setSearched} />
      <ProductCategory products={showProduct} check={checked} search={searched} category={category}/>
    </>
  )
}

export default App
