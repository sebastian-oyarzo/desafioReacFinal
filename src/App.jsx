import './App.css'
import { Buscador } from './components/Buscador'
import { MiApi } from './components/MiApi'
import { Navdar } from './components/Navdar'
import { useEffect, useState, } from 'react'

function App() {
  const [Personajes, setPersonajes] = useState([])
  const [FiltradoNombres, setFiltradoNombres] = useState("")
  const [Select, setSelect] = useState("")

  const capturoValor = (valor) => {
    setFiltradoNombres(valor)
  }
  let forSelect = (click) =>{
    setSelect(click)
    //capturo el select ascendente o descendente
  }

  let ordenar = () => {
    if(Select == "A-Z"){
      const ordenando = [...Personajes].sort((a, b) =>
        a.nombrePersonaje.localeCompare(b.nombrePersonaje)
      )
      setPersonajes(ordenando)
    }
        else if(Select == "Z-A"){
          const ordenando = [...Personajes].sort((a, b) =>
          b.nombrePersonaje.localeCompare(a.nombrePersonaje)
        )
        setPersonajes(ordenando)
    }else {
      console.log("no pasa nada")
    }

  }

  useEffect(() => {
    ordenar()
  },[Select])


const nombresYaFiltrados = Personajes.filter((Personas) =>
  Object.values(Personas).some((value) =>
  typeof value === 'string' && value.toLocaleLowerCase().includes(FiltradoNombres.toLocaleLowerCase())
))



  return (
    <>
      <Navdar />
          <Buscador capturoValor={capturoValor} forSelect={forSelect}/>
          <MiApi setPersonajes={setPersonajes} Personajes={Personajes} nombresYaFiltrados={nombresYaFiltrados}/>
    </>
)}
export default App