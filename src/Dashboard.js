import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Dashboard = () => {
  // Consume the context
  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log(theme)
  return (
    <div style={{
        backgroundColor: `${theme=='light'?'white':'black'}`,
        color: `${theme=='light'?'black':'white'}`
    }} >
      <h1>Dashboard</h1>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default Dashboard;