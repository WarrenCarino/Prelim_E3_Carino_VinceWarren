import React from 'react';

function Settings({ darkMode, toggleDarkMode }) {
  return (
    <div className="settings">
      <label htmlFor="darkMode">Dark Mode:</label>
      <input
        type="checkbox"
        id="darkMode"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
    </div>
  );
}

export default Settings;
