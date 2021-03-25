import React from 'react';
import { withRouter } from 'react-router-dom';
import './menuitem.style.scss'
const MenuItem = ({categorie,size,imageUrl, id,...url})=>{
    return (
            <div onClick={()=>{url.history.push(`show/${id}`)}} className={` menu-item `}>
                <div style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
                className='background-image'/>
                
                    <div className="content">
                        <h1 className="title">{categorie===0 ? 'Small' : categorie==1 ? 'Medium' : categorie==2 ? 'Big' : 'none' } size</h1>
                        <span className="subtitle">SHOW</span>
                    </div>
                </div>
        
    )
}
export default withRouter(MenuItem);