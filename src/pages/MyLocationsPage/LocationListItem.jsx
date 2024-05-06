import React from "react";
import { useState } from "react";
import './MyLocationsPage.css';


const LocationListItem = ({name, date, notes}) => {
    // const [locations, setLocations] = useState([])
    const [locations, setLocations] = useState([])
    const [inputValue, setInputValue] = useState()

    function handleDelete(locations){
        // const newLocations = [...locations]
        // newLocations.remove(locations, 1)
        // setLocations(newLocations)
      }

      function handleChange(locations) {

      }

    return (
        <>
        <div id="location-card">
        <div id="location-card-name">
            {name}
        </div>
        <br></br>
        <div id="location-card-date">
            {date}
        </div>
        <div id="location-card-notes">
            {notes}
        <br></br>
        </div>
        <div id="edit-delete-card">

        <button id="delete-button" onSubmit={handleDelete()}>delete</button> 
        <a href='/:id/edit'> edit</a>
        </div>
        </div>
        </>
    )
}

export default LocationListItem;
 
