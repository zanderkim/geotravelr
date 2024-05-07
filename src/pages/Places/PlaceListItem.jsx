import React from "react";
import { useState } from "react";

const PlaceListItem = ({id, name, notes, category}) => {
    // const [locations, setLocations] = useState([])
    const [places, setPlaces] = useState([])
    const [inputValue, setInputValue] = useState()

    function handleDelete(places){
    }

    function handleChange(places) {
    }

    return (
        <>
        <div id="place-card">
        <div id="place-card-name">
            {name}
        </div>
        <br></br>
        <div id="place-card-notes">
            {notes}
        </div>
        <div id="place-card-category">
            {category}
        <br></br>
        </div>
        <div id="edit-delete-card">

        <button id="delete-button" onSubmit={handleDelete()}>delete</button> 
        <a href={`/${id}/edit`}> edit</a>
        </div>
        </div>
        </>
    )
}

export default PlaceListItem;
 
