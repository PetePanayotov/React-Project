import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

function PageWrapper(props) {
  return (
    <div className="wrapper">
       <Header/>
            {props.children}
      <Footer/>
    </div>
  ); 
};

export default PageWrapper
