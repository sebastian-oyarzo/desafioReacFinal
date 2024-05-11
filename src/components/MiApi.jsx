import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const MiApi = () => {
  const [Personajes, setPersonajes] = useState([])

  const dataFromApi = async () => {
    const response = await axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=b222c4b71c5065a43c5a75feb85997da&hash=00d8434c0524e7ecd0800c11a4cf00d5')    

      const allFiltered = response.data.data.results.map((nombre) =>{
        const nombreFiltrado = {
          arrayNames: nombre.name,
          descripcion: nombre.description,
          imagenes: nombre.thumbnail.path,
          aparicionesComic: nombre.comics.available,
          eventosdondeactua: nombre.events.available,
        }
        return nombreFiltrado
      })

    console.log(allFiltered)

  }


  useEffect(() => {
    dataFromApi()
  },[])

  return (
    <div><h1>estoy pasando</h1></div>
  )
}
