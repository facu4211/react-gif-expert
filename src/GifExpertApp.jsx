import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

  const [categories, setcategories] = useState(['Cristiano Ronaldo']);

  const onAddCategory = (NewCategory) => {

    if (categories.includes(NewCategory)) return;
    //los ... es para desestructurar
    setcategories([NewCategory, ...categories]);
    // setCategories(cat =>[ ...cat, 'Valorant']);
  }

  return (
    <>
      {/*Titulo*/}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)}
      />

      {/* Listado de Gif */}


      {
        categories.map(category => (
          <GifGrid
            key={category}
            category={category} />
        )
        )}

    </>
  )
}
