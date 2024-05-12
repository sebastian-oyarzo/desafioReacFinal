import './App.css'
import { Buscador } from './components/Buscador'
import { MiApi } from './components/MiApi'
import { Navdar } from './components/Navdar'
import { useState, } from 'react'
import { Footer } from './components/Footer'

function App() {
  const [Personajes, setPersonajes] = useState([])
  const [FiltradoNombres, setFiltradoNombres] = useState("")

  const capturoValor = (valor) => {
    setFiltradoNombres(valor)
    console.log(FiltradoNombres)
  }

const nombresYaFiltrados = Personajes.filter((Personas) =>
  Object.values(Personas).some((value) =>
  typeof value === 'string' && value.toLocaleLowerCase().includes(FiltradoNombres.toLocaleLowerCase())
))
console.log(nombresYaFiltrados)



  return (
    <>
      <Navdar />
        <Buscador capturoValor={capturoValor} />
        <MiApi setPersonajes={setPersonajes} Personajes={Personajes} nombresYaFiltrados={nombresYaFiltrados}/>
        <Footer />
    </>
)}
export default App