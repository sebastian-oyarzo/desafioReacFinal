import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Collapse } from 'react-bootstrap'


// URL? = https://gateway.marvel.com:443/v1/public/characters?apikey=b222c4b71c5065a43c5a75feb85997da
// llave publica: b222c4b71c5065a43c5a75feb85997da
// llave privada: 639f6fb8c0910db576804959ec806e3f3855b2c0
// ts: 1 (podria ser cualquier numero)

//hash: ts=1 + llave privada + llave publica =  1639f6fb8c0910db576804959ec806e3f3855b2c0b222c4b71c5065a43c5a75feb85997da
//hash decodificado: 00d8434c0524e7ecd0800c11a4cf00d5



// con ts=1
//https://gateway.marvel.com:443/v1/public/comics?ts=1&format=comic&formatType=comic&noVariants=true&dateRange=1980%2C2020&orderBy=onsaleDate&apikey=b222c4b71c5065a43c5a75feb85997da&hash=00d8434c0524e7ecd0800c11a4cf00d5

// con ts=2
//https://gateway.marvel.com:443/v1/public/comics?ts=2&format=comic&formatType=comic&noVariants=true&dateRange=1980%2C2020&orderBy=onsaleDate&apikey=b222c4b71c5065a43c5a75feb85997da&hash=fc2d4e1703140fc7746066f7db8cc27d

// con ts=1 pero sin los filtros
// https://gateway.marvel.com:443/v1/public/comics?ts=1&format=comic&formatType=comic&noVariants=true&orderBy=onsaleDate&apikey=b222c4b71c5065a43c5a75feb85997da&hash=00d8434c0524e7ecd0800c11a4cf00d5

//https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=b222c4b71c5065a43c5a75feb85997da&hash=00d8434c0524e7ecd0800c11a4cf00d5


export const MiApi = () => {
  const [Personajes, setPersonajes] = useState([])

  const dataFromApi = async () => {
    const response = await axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=b222c4b71c5065a43c5a75feb85997da&hash=00d8434c0524e7ecd0800c11a4cf00d5')    

      const allFiltered = response.data.data.results.map((nombre) =>{
        const nombreFiltrado = {
          nombrePersonaje: nombre.name,
          descripcion: nombre.description,
          imagenes: nombre.thumbnail.path,
          aparicionesComic: nombre.comics.available,
          eventosDondeActua: nombre.events.available,
        }
        return nombreFiltrado
      })

    setPersonajes(allFiltered)

  }

  useEffect(() => {
    dataFromApi()
  },[])
  console.log(Personajes)
  return (
        <Row xs={1} md={3} className="g-4 mt-3">
            {Personajes.length ?  Personajes.map((personaje, key) => (
                <Col key={key} md={{ span: 3, offset: 2 }}>
                      <Card  >
                    <Card.Img variant="top" src={personaje.imagenes + ".jpg"} />
                    <Card.Body>
                      <Card.Title>{personaje.nombrePersonaje}</Card.Title>
                      <Card.Text>
                        {personaje.descripcion}
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>apariciones en los comic: {personaje.aparicionesComic}</ListGroup.Item>
                      <ListGroup.Item>eventos importantes en los que actua: {personaje.eventosDondeActua}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                  </Card>
              
              
              
              </Col>

                  ))
                : (<p>sadasd</p>)

            }
          </Row>
  )
}
