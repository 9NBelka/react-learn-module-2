import React from 'react';
import { useEffect, useState } from 'react';

const TestAutomobile = () => {
  const [developers, setDevelopers] = useState([]);

  // Запрос к API при монтировании компонента
  useEffect(() => {
    fetch('http://109.87.131.1:7070/developers')
      .then(response => response.json())
      .then(data => setDevelopers(data))
      .catch(error => console.error('Error fetching developers:', error));
  }, []);

  return (
    <div className="developers-list">
      {developers.length > 0 ? (
        developers.map(dev => (
          <div key={dev.id} className="developer-card">
            <h2>{dev.login}</h2>
            <p>Skills: {dev.url}</p>
          </div>
        ))
      ) : (
        <p>Loading developers...</p>
      )}
    </div>
  );
};

export default TestAutomobile;