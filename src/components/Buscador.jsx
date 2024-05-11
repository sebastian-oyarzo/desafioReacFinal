import React from 'react'

export const Buscador = () => {
  return (
    <div className='Buscador border'>
            <select name="TipoDeFiltro" id="categorias" className='m-3 fs-3 text-center p-2'>
                <option value="1">tamaño</option>
                <option value="2">cantidad de habitantes</option>
                <option value="3">por letra Inicial</option>
            </select>
            <input type="text" placeholder='buscar' className='m-3  fs-4 p-2' />
            <div>
                <button className='m-3 border fs-3'>buscar</button>
            </div>
            <select name="TipoDeFiltro2" id="categorias2" className='m-3 fs-3 text-center p-2'>
                <option value="4">paises que hablan ingles</option>
                <option value="5">paises que hablan español</option>
            </select>
            <button className='border m-3 border fs-3'>busca por idioma</button>
    </div>
  )
}
