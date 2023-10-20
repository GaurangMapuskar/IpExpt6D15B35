import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Result() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name');
  const email = searchParams.get('email');

  return (
    <div>
    <Navbar />
      {name && email ? (
        <h1>Thank you, {name}, {email}, for contacting us.</h1>
      ) : (
        <h1>Thank you for contacting us.</h1>
      )}
      <Footer name={"Gaurang Mapuskar"} number={9969780696} />
    </div>
  );
}

export default Result;