import React from 'react';
import './Profile.css';
import img1 from '../assets/PP.jpg'
import img2 from '../assets/banner.jpg'

const Profile = () => {
    return (
        <div className="profile-card">
            <div className="header">
                <img src={img2} alt="background" className="background-img"/>
                <img src={img1} alt="profile" className="profile-img"/>
            </div>
            <div className="profile-info">
                <h2>Doctor Strange <span>∞</span></h2>
                <p>Multiverse</p>
            </div>
            <div className="profile-stats">
                <div className="stat">
                    <h3>88M</h3>
                    <p>Followers</p>
                </div>
                <div className="stat">
                    <h3>888M</h3>
                    <p>Likes</p>
                </div>
                <div className="stat">
                    <h3>88K</h3>
                    <p>Photos</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
