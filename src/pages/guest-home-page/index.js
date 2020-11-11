import React from 'react';
import styles from './index.module.css';
import Player from '../../components/player';
import Title from '../../components/title';
import PageWrapper from '../../components/page-wrapper';

const GuestHomePage = () => {

  document.title = 'Home'

  return (
      <PageWrapper>
          <div className={styles.container}>
            <Title text="Fast Cars are your passion?"/>
          </div>
          <Player/>
      </PageWrapper>
  );

};



export default GuestHomePage;