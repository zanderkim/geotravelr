import React from 'react';

export default function LocationList({ locations}) {
    return (
        <ul>
            {locations.map(location => (
                <location
                key={location.user}
                location={location}
                />
            ))}
        </ul>
    )
};

