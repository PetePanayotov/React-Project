import React from 'react';
import PageWrapper from '../../components/page-wrapper';
import GoogleApiWrapper from '../../components/map';
import styles from './index.module.css';

const ContactsPage = () => {

    document.title = 'About';

    return (
          <PageWrapper layout="about">
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
                              <span>Email: </span><span>autocar@gmail.com</span>
                          </li>
                      </ul>
                  </div>
          </PageWrapper>
    );

};



export default ContactsPage;