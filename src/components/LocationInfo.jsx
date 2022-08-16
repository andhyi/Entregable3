import React from 'react'

const LocationInfo = ({location}) => {

    console.log(location)

  return (
    <article className='art_container'>
        <h2 className='title2'>{location?.name}</h2>
        <ul className='ul'>
            <li><span>Type: </span>{location?.type}</li>
            <li><span>Dimension: </span>{location?.dimension}</li>
            <li><span>Population: </span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo