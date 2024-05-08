import React from 'react';
import LocationListItem from './LocationListItem';
import './MyLocationsPage.css';

const LocationList = ({location, locations, setLocations, handleDelete}) => {
    console.log(locations)
    return (
        <>
        <ul className="LocationList">
            {locations.map(location => (
                <LocationListItem
                    key={location._id}
                    id={location._id}
                    name={location.name}
                    date={location.date}
                    notes={location.notes}
                    locations={locations} 
                    setLocations={setLocations}
                    handleDelete={handleDelete}
                />
            ))}
            <br></br>
             <a href="/addlocation" id="add-lctn"> +location </a>
        </ul>
        </>
    )
}

export default LocationList;
