import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/custom-button/CustomButton';
import Directory from '../../components/directory/DirectoryComponent';

const Homepage = (props)=>{
    return (
        <div className="homepage">
            <Directory/>
            <Link to='/shop'>
            <CustomButton>See Moore</CustomButton>
            </Link>
        </div>
    )
}
export default Homepage;