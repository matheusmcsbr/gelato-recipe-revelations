
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-6 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl text-center font-bold text-gelato-chocolate">
          Gelato Ricette Italiane
        </h1>
        <p className="text-center mt-2 text-gelato-chocolate/80 italic">
          Authentic recipes from renowned Italian gelato masters
        </p>
      </div>
    </header>
  );
};

export default Header;
