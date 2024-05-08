import React from "react";
import { useState, useEffect} from "react";
import './MyLocationsPage.css';

import { useNavigate, Link } from "react-router-dom";

const LocationListItem = ({id, name, date, notes, places, handleDelete}) => {
    const navigate=useNavigate();

    return (
        <>
        <ul id="sticky-notes"> <div id="pin"> 📍 </div>
        <div id="location-card"> 
        
        <div id="location-card-name"> {name} </div>
        <div id="location-card-date"> {date} </div>
        <br></br>
        <br></br>
        <div id="location-card-notes"> {notes} </div>   
       
            <div id="edit-delete-card">
                <button id="note-delete-button" onClick={() => handleDelete(id)}>x</button>
                &nbsp;  &nbsp;
                <Link id="edit-sticky" to={`/${id}/edit`}> ✏️</Link>
            </div>
        </div>
        </ul>
        </>
    )
}

export default LocationListItem;
