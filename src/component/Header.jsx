import React from 'react';
import { LogoImg } from '../assets/index.js';
import Button from './UI/Button.jsx';

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={LogoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
}
