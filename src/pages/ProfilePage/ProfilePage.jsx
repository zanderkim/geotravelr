import React from 'react';
import {useState} from 'react';
import './ProfilePage.css';
import * as userService from '../../utilities/users-service';

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
      <div class="my-profile-page">
        <h1 class="page-headers"> hello, travelr! </h1>

        <p> wishlist (places you want to visit) </p>

{/* 
          <ul class="wishlist-list">
          {wishlist.map((wishlist) => (
            <li key={wishlist.id} name={wishlist.name}>{wishlist}
              <button onClick={() => handleDelete(wishlist)}> delete</button>
              <button onClick={() => handleChange(wishlist)} > edit </button>
              </li>
          ))} 
        </ul> */}
       
        <form id="wishlist-form">
          <input type="text" value={inputValue} onChange={handleChange}/>
          <button id="wishlist-btn" onClick={handleSubmit}> add </button>
        </form>
      </div>
      </>
    );
  }