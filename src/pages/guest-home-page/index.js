import React from 'react';
import styles from './index.module.css';
import Player from '../../components/player';
import Title from '../../components/title';
import PageWrapper from '../../components/page-wrapper';

function GuestHomePage() {
  return (
      <PageWrapper>
          <div className={styles.container}>
            <Title />
          </div>
          <Player/>
      </PageWrapper>
  );

};



export default GuestHomePage;