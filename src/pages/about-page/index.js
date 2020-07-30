import React from 'react';
import styles from './index.module.css';
import PageWrapper from '../../components/page-wrapper';
import GoogleApiWrapper from '../../components/map';
import Main  from '../../components/main';

function AboutPage() {
  return (
        <PageWrapper>
            <Main layout="about">
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
                            <span>Email: </span><span>autocar@abv.bg</span>
                        </li>
                    </ul>
                </div>
            </Main>
        </PageWrapper>
  );

};



export default AboutPage;