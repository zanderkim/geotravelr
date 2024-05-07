import React from "react";
import { useState, useEffect} from "react";
import './MyLocationsPage.css';
import { useNavigate, Link } from "react-router-dom";

const LocationListItem = ({id, name, date, notes, places, handleDelete}) => {
    const navigate=useNavigate();


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

        {/* <button type="submit" onClick={() => handleDelete()} className="btn-delete">delete</button> */}
        {/* <button id="delete-location-button" type="submit" onClick={handleDelete(id)}>delete</button> */}
        <span>
        <button onClick={() => handleDelete(id)}>delete</button>
        </span>
        <Link to={`/${id}/edit`}> edit location </Link>
 
        </div>
        </div>
        </>
    )
}

export default LocationListItem;
