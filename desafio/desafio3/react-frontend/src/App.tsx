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
      axios('http://localhost:3000/routes', {
        headers:{
          'Access-Control-Allow-Origin':  'http://localhost:3000',
          'Access-Control-Allow-Headers':  'Content-Type, X-Auth-Token, Authorization, Origin',
          'Access-Control-Allow-Methods':  'GET',
        }
      })
      .then(res => {
        setends(res.data)
      }).catch(error => {
        console.log("error", error);
        
      });
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
