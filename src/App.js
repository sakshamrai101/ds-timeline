import React, { useState, useEffect } from 'react';
import './Timeline.css';
import Timeline from './components/Timeline';

function App() {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate = new Date('2022-12-25T18:30:00-08:00'); // 6:30 PM PDT on Dec 25, 2022

    const calculateTimeElapsed = () => {
      const now = new Date();
      const diff = now - startDate;

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeElapsed({ years, months, days, hours, minutes, seconds });
    };

    const interval = setInterval(calculateTimeElapsed, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="App">
      <h1 style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '20px' }}>
        {`${timeElapsed.years} Years, ${timeElapsed.months} Months, ${timeElapsed.days} Days, ${timeElapsed.hours} Hours, ${timeElapsed.minutes} Minutes, and ${timeElapsed.seconds}  
        Seconds of togetherness and continuing...`}
      </h1>
      <Timeline />
    </div>
  );
}

export default App;
