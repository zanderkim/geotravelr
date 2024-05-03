import React from 'react';
import {useState} from 'react';

export default function ProfilePage() {
    const [location, setLocation] = useState([])
    const [inputValue, setInputValue] = useState('')

    function handleChange(evt){
      setInputValue(evt.target.location)
    }

    function handleSubmit(evt){
      evt.preventDefault()
      setLocation([...location, inputValue])
      setInputValue('')
    }

    function handleDelete(locations){
      const newLocations = [...locations]
      newLocations.splice(locations, 1)
      setLocation(newLocations)
    }

    return (
      <>
      <div class="my-locations-page">
        <h1> hello, travelr! </h1>

        <p> my wishlist: </p>


        <ul class="location-list">
          {location.map((location) => (
            <li key={location.id} name={location.name}>{location}
              <button onClick={() => handleDelete(location)}> delete</button>
              {/* <button onClick={() => handleChange(location)} > edit </button> */}
              </li>
          ))}
        </ul>

        <form>
          <input type="text" value={inputValue} onChange={handleChange}/>
          <button onClick={handleSubmit}> add destination to wishlist </button>
        </form>



      </div>
      </>
    );
  }