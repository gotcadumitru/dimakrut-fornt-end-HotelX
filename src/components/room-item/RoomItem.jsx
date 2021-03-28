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
            {/* <div className='collectionFooter'> */}
                {/* <div className='name'>{props.item.name}</div> */}
                {/* <div className='price'>${props.item.price}</div> */}
            {/* </div> */}
        </div>
    )
}
export default RoomItem