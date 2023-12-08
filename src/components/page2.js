import React, { useEffect } from 'react';
import Rain from './Rain';
import '../App.css';
import '../rain.css'

const Page2 = () => {
  useEffect(() => {
    document.body.classList.add('rain-cursor');

    return () => {
      document.body.classList.remove('rain-cursor');
    };
  }, []);

  return (
    <section className="page2-container">
      <Rain />
    </section>
  );
};

export default Page2;
