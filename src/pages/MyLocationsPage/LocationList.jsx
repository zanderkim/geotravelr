import React from 'react';
import LocationListItem from './LocationListItem';


const LocationList = ({location, locations, setLocations}) => {
    console.log(locations)
    return (
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
                />
            ))}
        </ul>
    )
}

export default LocationList;
