import React from 'react'
import Form from 'react-bootstrap/Form'


export const Buscador = ({Personajes, setPersonajes, capturoValor}) => {

    const onChange = (event) =>{
      const valor = event.target.value
      capturoValor(valor)
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
        <Form.Select aria-label="Default select example">
          <option>ordenar por</option>
          <option value="1">Orden alfabetico ascendente A-Z</option>
          <option value="2">Orden alfabetico descendente Z-A</option>
          <option value="3">mayor aparicion en comics</option>
      </Form.Select>
      </div>

    </div>
  )
}







    //   const datosFiltrados = Personajes.filter((personaje) =>
    // Object.values(personaje).some((personajeYaFiltrado) =>
    // personajeYaFiltrado.toLowerCase().includes(valor)))
    // setPersonajes(datosFiltrados)