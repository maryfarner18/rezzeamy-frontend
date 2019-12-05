import React from 'react';

const Footer = () => {
  const handleClick = e => {
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <h3 onClick={handleClick}>Go To Top</h3>
    </footer>
  );
};

export default Footer;
