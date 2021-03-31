import React from 'react';
import { withRouter } from 'react-router-dom';
import './menuitem.style.scss'
const MenuItem = (props)=>{
    // debugger
    const {nr_max_pers,poza1,id,inchiriat_de} = props;
    return (
            <div onClick={()=>{props.history.push(`rooms/${id}`)}} className={` menu-item `}>
                <div style={{
                    backgroundImage: poza1.indexOf('jpg') ===-1 ? `url(${poza1}.jpg)` : `url(${poza1})` ,
                }}
                className='background-image'/>
                
                    <div className="content">
                        <h1 className="title">{nr_max_pers===1 ? 'Small' : nr_max_pers==2 ? 'Medium' : nr_max_pers >=3 ? 'Big' : 'none' } size</h1>
                        <span className="subtitle">SHOW</span>
                    </div>
                </div>
        
    )
}
export default withRouter(MenuItem);