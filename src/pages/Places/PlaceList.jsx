import React from 'react';
import PlaceListItem from '../Places/PlaceListItem';


const PlaceList = ({places}) => {
    console.log(places)
    return (
        <ul className="PlaceList">
            {places.map(place => (
                <PlaceListItem
                    key={location._id}
                    id={location._id}
                    name={place.name}
                    notes={place.notes}
                    category={place.category} 
                />
            ))}
        </ul>
    )
}

export default PlaceList;
