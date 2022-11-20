import React from 'react'

export const LocationBadges = ({ locationArray = {} }) => {
    return (
        <div style={{ flexWrap: 'wrap', display: 'flex' }} >
            {Object.keys(locationArray).map(locationName => {
                if (locationArray[locationName])
                    return <span style={{ background: 'gray', padding: '5px', marginRight: '5px', borderRadius: '100px', color: 'white' }}>
                        {locationName}
                    </span>
            })}
        </div>
    )
}
