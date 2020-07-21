import React from 'react';
import styles from './index.module.css';
import PageWrapper from '../../components/page-wrapper';
import GoogleApiWrapper from '../../components/map';

function AboutPage() {
  return (
      <PageWrapper>
        <div className={styles.main}>
            <GoogleApiWrapper/>
            <div className={styles.infoBox}>
                <ul className={styles.info}>
                    <li>
                        <span>Address: </span><span>gr. Dupnitsa ul. Sofiisko Shose</span>
                    </li>
                    <li>
                        <span>Phone: </span><span>089*******</span>
                    </li>
                    <li>
                        <span>Email: </span><span>autocars@abv.bg</span>
                    </li>
                </ul>
            </div>
        </div>
      </PageWrapper>
  );

};



export default AboutPage;