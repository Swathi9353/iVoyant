// App.tsx
import React from 'react';
import Header from './Header//Header';
import MainContent from './Header/Maincontent';
import Footer from './Header/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
