import axios from 'axios'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import { useEffect } from 'react'

export const MiApi = ({Personajes , setPersonajes, nombresYaFiltrados}) => {


  const dataFromApi = async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character')


      const allFiltered = response.data.results.map((nombre) =>{

        const nombreFiltrado = {
          nombrePersonaje: nombre.name,
          especie: nombre.species,
          planetaOrigen: nombre.origin.name,
          imagen: nombre.image,
        }
        return nombreFiltrado
      })
      setPersonajes(allFiltered)
  }
  useEffect(() => {
    dataFromApi()
  },[])


  return (
        <Row xs={1} md={3} className="g-4 mt-3 mb-5">
             {    nombresYaFiltrados.length ? nombresYaFiltrados.map((yaFiltrado, key) => (
                          <Col key={key} md={{ span: 3, offset: 2 }}>
                                <Card  className='p-3 text-center'>
                                  <Card.Img variant="top" src={yaFiltrado.imagen} />
                                <Card.Body >
                                  <Card.Title className='textWhite'>{yaFiltrado.nombrePersonaje}</Card.Title>
                                  <Card.Text>
                                    {yaFiltrado.especie}
                                  </Card.Text>
                                </Card.Body>
                              <ListGroup className="list-group-flush">
                                <ListGroup.Item>planeta de origen: {yaFiltrado.planetaOrigen}</ListGroup.Item>
                              </ListGroup>
                            </Card>
                          </Col>
                            ))
                              :
                              Personajes.length ?  Personajes.map((personaje, key) => (
                          <Col key={key} md={{ span: 3, offset: 2 }}>
                            <Card  className='p-3 text-center'>
                              <Card.Img variant="top" src={personaje.imagen} />
                              <Card.Body >
                                <Card.Title className='textWhite' >{personaje.nombrePersonaje}</Card.Title>
                                <Card.Text>
                                  {personaje.especie}
                                </Card.Text>
                                </Card.Body>
                              <ListGroup className="list-group-flush">
                                <ListGroup.Item>planeta de origen: {personaje.planetaOrigen}</ListGroup.Item>
                              </ListGroup>
                            </Card>
                          </Col>
                        )):
                            <Col md={{ span: 3, offset: 5 }} >
                              <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                              </Spinner>
                            </Col>
                        }
          </Row>
  )
}