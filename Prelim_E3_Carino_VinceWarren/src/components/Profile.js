import React from 'react';
import UserInfo from './UserInfo';
import ProfilePicture from './ProfilePicture';

function Profile({ user, onNameChange }) {
  return (
    <div className="profile">
      <h2>Profile</h2>
      <ProfilePicture />
      <UserInfo user={user} onNameChange={onNameChange} />
    </div>
  );
}

export default Profile;
