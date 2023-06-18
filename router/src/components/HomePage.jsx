import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Головна сторінка</h1>
    <Link to="/users">Перейти до списку користувачів</Link>
  </div>
);

export default HomePage;
