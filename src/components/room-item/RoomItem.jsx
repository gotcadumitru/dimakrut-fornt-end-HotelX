import React from 'react';
import './RoomItem.scss';

const RoomItem = (props)=>{
    return (
        <div className='collectionItem'>
            <div style={{
                    backgroundImage: `url(${props.imageUrl}.jpg)`,
                }}
                className='image'>
            </div>
        </div>
    )
}
export default RoomItem