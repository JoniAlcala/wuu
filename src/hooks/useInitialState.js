import { useState, useEffect } from 'react';

const useInitialState = () => {
  const [videos, setVideos] = useState({
    'mylist': [],
    'trends': [],
    'originals': [],
  });

  useEffect(() => {
    fetch(' http://localhost:3000/initalState')//esta api debe ser inicializada en otra pestaña de la terminal como json-server initialState.json
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  return videos;
};

export default useInitialState;
