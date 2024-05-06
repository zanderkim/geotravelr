import React from "react";


const LocationListItem = ({location}) => {
    return (
        <div id="location-card">
            {location.name}
            {location.notes}
        </div>
    )
}

export default LocationListItem;
 