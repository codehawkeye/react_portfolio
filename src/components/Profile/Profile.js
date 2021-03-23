import React from 'react'
import { Typography } from '@material-ui/core'
import CustomTimeline from '../Timeline/Timeline';

import './Profile.css'


const Profile = () => {
    return (
        <div className="profile container_shadow">
            <div className='profile_name'>
                <Typography className='name'>Michael Carter</Typography>
                <Typography className='title' >Web Developer</Typography>
            </div>
            <figure className='profile_image'>
                <img src={require('../../assets/images/profilePic.jpg')} alt='' />
            </figure>
        <div className = 'profile_information' >
                <CustomTimeline/>
            <br />
                <button> my Button</button>
                </div>             
        </div>
    );
};

export default Profile;
