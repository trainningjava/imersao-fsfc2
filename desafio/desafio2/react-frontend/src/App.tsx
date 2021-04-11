import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Position {
  latitude: number;
  longitude: number;
}

interface Endereco {
  title: string;
  startPosition: Position;
  endPosition: Position;
}

function App() {
  const [ends, setends] = useState<Endereco[]>([]);

  useEffect(() => {
    const handleApi = async () => {
      axios.defaults.headers.post['Content-Type'] =
        'application/json;charset=utf-8';
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
      const res = await axios.get('http://localhost:3000/routes');
      console.log(res.data);

      if (res != null) setends(res.data);
    };
    handleApi();
  }, []);

  return (
    <div>
      <div>Desafio2</div>
      <ul>
        {ends.map((route) => (
          <li>
            {route.title}: de {route.startPosition.latitude},{' '}
            {route.startPosition.longitude} até {route.endPosition.latitude},{' '}
            {route.endPosition.longitude}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
