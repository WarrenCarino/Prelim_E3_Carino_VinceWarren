import React from 'react';

function UserInfo({ user, onNameChange }) {
  return (
    <div className="user-info">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={user.name}
        onChange={onNameChange}
        className="form-input"
      />
      <p>Welcome, {user.name}!</p>
    </div>
  );
}

export default UserInfo;
