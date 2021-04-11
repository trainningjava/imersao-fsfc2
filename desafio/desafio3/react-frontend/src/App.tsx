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
  const [ends, setEnds] = useState<Endereco[]>([]);

  useEffect(() => {
    const handleApi = async () => {
      const res = await axios('http://localhost:3000/routes');

      if (res != null) setEnds(res.data);
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
