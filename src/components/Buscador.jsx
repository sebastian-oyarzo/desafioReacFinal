import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export const Buscador = ({Personajes, setPersonajes, capturoValor, forSelect}) => {

    const onChange = (event) =>{
      const valor = event.target.value
      capturoValor(valor)
    }

    const selector = (e) =>{
      const click = e.target.value
      forSelect(click)
    }


  return (
    <div className='Buscador border'>
      <div className='porNombre'>
      <Form.Control
        type="text"
        name='nombres'
        placeholder="buscar por nombre de personaje"
        onChange={onChange}
      />
      </div>
      <div>
        <Form.Select aria-label="Default select example" onChange={selector} >
          <option defaultChecked value="nada">ordenar por</option>
          <option  value="A-Z">Orden alfabetico ascendente A-Z</option>
          <option  value="Z-A">Orden alfabetico descendente Z-A</option>
      </Form.Select>
      </div>

    </div>
  )
}







    //   const datosFiltrados = Personajes.filter((personaje) =>
    // Object.values(personaje).some((personajeYaFiltrado) =>
    // personajeYaFiltrado.toLowerCase().includes(valor)))
    // setPersonajes(datosFiltrados)