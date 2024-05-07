import React from 'react';
import LocationListItem from './LocationListItem';


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
        </ul>
        <a href="/addlocation" id="add-lctn"> add location</a>

        </>
    )
}

export default LocationList;
