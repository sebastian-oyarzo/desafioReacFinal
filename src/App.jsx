import './App.css'
import { Buscador } from './components/Buscador'
import { MiApi } from './components/MiApi'
import { Navdar } from './components/Navdar'



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

function App() {



  return (
    <>
      <Navdar />
        <Buscador />
        <MiApi />
    </>
)}
export default App
