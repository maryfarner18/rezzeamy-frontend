import React from 'react';

const Footer = () => {
  const handleClick = e => {
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <h4 onClick={handleClick}>Go To Top</h4>
      <h5><em>Powered by rezzemay™️</em>  </h5>
    </footer>
  );
};

export default Footer;
