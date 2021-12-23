import React from 'react';
import './Profile.css'

const Profile = ({name, imageURL}) =>{
    return(
        <>
        <div className="grid-item">
            <img
                className= "avatar"
                src={imageURL}
                alt={name}
            />
        <h3 className="profileName">{name}</h3>
        </div>
        
        </>      
    );
}


export default Profile;