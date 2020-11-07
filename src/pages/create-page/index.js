import React , {Component, useEffect} from 'react';
import PageWrapper from '../../components/page-wrapper';
import Main from '../../components/main';
import Form from '../../components/create-update-form';
import styles from './index.module.css';


const CreatePage = () => {

    useEffect(() => {
        document.title = 'Create Page'
    } , []);


    return (
        <PageWrapper>
            <Main layout="forms">
                <div className={styles.firstDiv}></div>
                <div className={styles.formDiv}>
                   <Form page="create"/>
                </div>
                <div className={styles.secondDiv}></div>
            </Main>
        </PageWrapper>
    );

};


export default CreatePage;