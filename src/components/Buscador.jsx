import React from 'react'

export const Buscador = () => {
  return (
    <div className='Buscador border'>
            <select name="TipoDeFiltro" id="categorias" className='m-3 fs-3 text-center p-2'>
                <option value="1">con mas apariciones en los comics</option>
                <option value="2">con mas eventos importantes</option>
            </select>
            <input type="text" placeholder='buscar por nombre' className='m-3  fs-4 p-2' />
            <div>
                <button className='m-3 border fs-3'>buscar</button>
            </div>
            <select name="TipoDeFiltro2" id="categorias2" className='m-3 fs-3 text-center p-2'>
                <option value="4">ascendente A-Z</option>
                <option value="5">descendente Z-A</option>
            </select>
    </div>
  )
}
