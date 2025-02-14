import { object } from "prop-types"
import { useState } from "react"

//Este es un funcionale component o una funcion de flecha.
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState("One Piece")

    const onInputChange = ({target}) => {
    //  console.log(target.value);
        setinputValue(target.value)
    }

    //event.preventDefault hace que se qeuda guardado lo que se escribe no hace refres de pagina
 const onSubmit = (event) => {
 event.preventDefault();
if (inputValue.trim().length<= 1) return;

onNewCategory(inputValue.trim())
// setcategories( categories => [...categories,inputValue ])
//lo de arriba es un callback
setinputValue("");
//lo de arriba hacer que se borre luego de presionar enter.

 }

  return (
    <form onSubmit={onSubmit}> 
    <input
      type="text"
      placeholder="Buscar gifs"
    value={inputValue}
    onChange={onInputChange}

    />    
</form>
  )
}
