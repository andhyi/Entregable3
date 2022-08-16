import React from 'react'
import useFetch from '../hooks/useFech'

const CardResident = ({url}) => {

    console.log(url)

    const fore = useFetch(url)

    console.log(fore)

  return (
    <article className='Card'>
      <div className='cardm'>
        <header>
          <img src={fore?.image} alt="170" />
          <div>
            <div className='circle'></div>
            <span>{fore?.status}</span>
          </div>
        </header>
        <div>
            <h1 className='card_name'>{fore?.name}</h1>
            <ul>
            <li>SPECIES: <span>{fore?.species}</span></li>
            <li>ORIGIN: <span>{fore?.origin.name}</span></li>
            <li>EPPISODES WHERE APPEAR: <span>{fore?.episode.length}</span></li>
            </ul>
        </div>
        </div>
    </article>
  )
}

export default CardResident