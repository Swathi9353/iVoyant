// App.tsx
import React from 'react';
import Header from './Header/Header';
import MainContent from './Header/Maincontent';
import Footer from './Header/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
