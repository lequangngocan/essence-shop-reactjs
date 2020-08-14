import React from 'react';
import '../../assets/client/css/core-style.css';
import '../../assets/client/css/style.css';
import Header from '../../components/client/Header';
import Footer from '../../components/client/Footer';

const LayoutCLient = ({ children }) => {
  return (
    <div className="layoutClient">
      <Header />
      <div className="cart-bg-overlay"></div>
      {children}
      <Footer />
    </div>
  )
}

export default LayoutCLient
