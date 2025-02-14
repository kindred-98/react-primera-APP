import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGridApp } from "./Components/GifGridApp"


export const GifAPP = () => {

  //push es para mutar un objeto
const [categories, setcategories] = useState(["One Piece"])
//  console.log(categories)

//hicimos desestructuracion. una muestra lol en 4 lugar y la otra muestra lol en 1 lugar
const onAddCategory = (newCategory) =>{
 if(categories.includes(newCategory)) return;

  setcategories([newCategory, ...categories])
  // setcategories(["lol", ...categories])
// console.log(newCategory)
}
  return (
    <>
    {/*Titulo */}
        <h1> GifAPP </h1> 

    {/* Input */}
<AddCategory onNewCategory={( value ) => onAddCategory( value )}
// setcategories={ setcategories 
/>

    {/* Listado de Gif*/} 
{/* <button onClick={onAddCategory}>Agregar</button> */}

<ol>

{categories.map((category) => (
  <GifGridApp 
  key={category} 
  category={category}
  />
  ))
}
</ol>

    {/* Gif item */}
    </>
  )
}
