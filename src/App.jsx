import './App.css'
import useFetch from './hooks/useFech'
import LocationInfo from './components/LocationInfo'
import CardResident from './components/CardResident'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
 const [searchInput, setSearchInput] = useState('')
 const [location, setLocation] = useState()

 useEffect(() => {
  let numberLocation

  if(searchInput==='') {
    numberLocation = Math.ceil(Math.random() * (126-1) + 1)
  } else {
    numberLocation = searchInput
  }
//ahora hacemos el llamado:
const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`

 axios.get(URL)
.then(res => setLocation(res.data))
.catch(err=>console.log('la url no es valida, ingresar otra url'))


 }, [searchInput])
  
  
//  const location = useFetch(URL)

 const handdleSubmit = e => {
    e.preventDefault()
    setSearchInput(e.target.search.value)
 }

 console.log(searchInput)
 
  return (
    <div className="App">
      <h1 className='title'></h1>
      <form className='form' onSubmit={handdleSubmit}>
        <input className='inputSearch' id='search' type="text" />
        <button className='button'>Search</button>
      </form>
          <LocationInfo location={location} />
      <div className='card_container'>
        {
          location?.residents.map(url => (
            <CardResident key={url} url={url}/>
          ))
        }
      </div>
      
    </div>
  )
}

export default App
