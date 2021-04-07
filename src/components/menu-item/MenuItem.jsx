import React from 'react';
import { withRouter } from 'react-router-dom';
import './menuitem.style.scss'
const MenuItem = (props)=>{
    const {nr_max_pers,poza,id} = props;
    const itemClick = (e)=>{
        if(!props.forImages){
            props.history.push(`rooms/${id}`)
        }else{
            e.preventDefault();
        }
    }
    let contentText;
    if(props.forCleaner){
        contentText=  <div className="content">
        <h1 className="title">Room number: {id}</h1>
        <span className="subtitle">SHOW</span>
    </div>
    }else if(props.forImages){
        contentText= ''
    }else{
        contentText= <div className="content">
        <h1 className="title">{nr_max_pers===1 ? 'Small' : nr_max_pers==2 ? 'Medium' : nr_max_pers >=3 ? 'Big' : 'none' } size</h1>
        <span className="subtitle">SHOW</span>
    </div>


    }
    return (
             <div onClick={(e)=>{itemClick(e) }} className={` menu-item `}>
                <div style={{
                    backgroundImage: poza.indexOf('jpg') ===-1 ? `url(${poza}.jpg)` : `url(${poza})` ,
                }}
                className='background-image'/>
                    {contentText}
                </div>
        
    )
}
export default withRouter(MenuItem);