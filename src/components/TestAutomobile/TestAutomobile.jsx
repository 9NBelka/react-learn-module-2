
import React, { useEffect, useState } from 'react';

const TestAutomobile = () => {
  const [data, setData] = useState(null);  // Для хранения данных
  const [error, setError] = useState(null);  // Для обработки ошибок
  const [loading, setLoading] = useState(true);  // Для индикации загрузки

  useEffect(() => {
      fetch('http://109.87.131.1:3000')  // Пример эндпоинта
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

  }, []);

  if (loading) {
    return <p>Loading...</p>;  // Индикация загрузки
  }

  if (error) {
    return <pre>Error: {error.message}</pre>;  // Отображение ошибки
  }

  return (
    <div>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>  {/* Форматируем и отображаем JSON */}
    </div>
  );
};

export default TestAutomobile;
