import React, { useEffect, useState } from 'react';
import '../index.css'; // Ensure Tailwind CSS is imported
import Logo from "../assets/logo.png"

const App = () => {
  const [isAnimationVisible, setAnimationVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationVisible(false);
    }, 1000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isAnimationVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-200 z-50 animate-zoomOut">
            <img src= {Logo} alt='Logo'/>
        </div>
      )}
    </div>
  );
};

export default App;
