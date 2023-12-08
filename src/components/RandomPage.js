import React, { useEffect, useState } from 'react';
import { getRandomPage } from '../utils/randomPageGenerator';

const RandomPage = () => {
  const [PageComponent, setPageComponent] = useState(null);

  useEffect(() => {
    const randomPage = getRandomPage();
    import(`./${randomPage}`).then((module) => {
      setPageComponent(() => module.default);
    });
  }, []);

  return (
    <div>
      {PageComponent && <PageComponent />}
    </div>
  );
};

export default RandomPage;
