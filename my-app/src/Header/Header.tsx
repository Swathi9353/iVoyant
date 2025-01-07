// Header.tsx
import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header>
      <h1 >Welcome to My Website!</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
