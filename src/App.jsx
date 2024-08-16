import { useState } from 'react';
import './App.css';
import Engagement from './Components/Engagements';
import Followers from './Components/Followers';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode ' : 'app-container'}>
      
        <div className="Dark">
          <span>Dark Mode</span>
          <label className="switch">
            <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
            <span className="slider round"></span>
          </label>
        </div>
      <Followers />
      <Engagement />
    </div>
  );
}

export default App;
