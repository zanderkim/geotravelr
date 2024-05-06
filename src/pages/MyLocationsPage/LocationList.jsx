import React from 'react';
import LocationListItem from './LocationListItem';


const LocationList = ({locations}) => {
    return (
        <ul className="LocationList">
            {locations.map(location => (
                <LocationListItem
                    key={location.id}
                    name={location.name}
                    notes={location.notes} 
                />
            ))}
        </ul>
    )
}

export default LocationList;
