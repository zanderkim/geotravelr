import React from "react";
import { useState, useEffect, Link } from "react";
import './MyLocationsPage.css';
import { useNavigate } from "react-router-dom";
import { deleteLocation } from "../../utilities/locations-api";

const LocationListItem = ({id, name, date, notes, places, handleDelete}) => {
    const navigate=useNavigate();

//  async function handleDelete(id) {
//         console.log('delete button clicked', id);
//         await deleteLocation(id);
//         window.location.reload();
//         // navigate("/mylocations");
//       }

    return (
        <>
        <div id="location-card"> 
        <div id="location-card-id">
            {id}
        </div>
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

        {/* <button type="submit" onClick={() => handleDelete()} className="btn-delete">delete</button> */}
        {/* <button id="delete-location-button" type="submit" onClick={handleDelete(id)}>delete</button> */}
        <span>
        <button onClick={() => handleDelete(id)}>delete</button>
        </span>
        <a href="{id}}/update"> edit location</a>
    
        </div>
        </div>
        </>
    )
}

export default LocationListItem;
