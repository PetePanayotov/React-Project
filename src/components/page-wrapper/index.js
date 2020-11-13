import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Main from '../../components/main';

function PageWrapper({children , layout}) {

  const mainLayout = layout || 'vertical-centered'

  return (
    <div className="wrapper">
      <Header/>
      <Main layout={mainLayout}>
        {children}
      </Main>
      <Footer/>
    </div>
  ); 
};

export default PageWrapper
