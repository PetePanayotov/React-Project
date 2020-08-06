import React , {useState, useEffect} from 'react';
import PageWrapper from '../../components/page-wrapper';
import Main from '../../components/main';
import Cars from '../../components/cars-container';
import Title from '../../components/title';
import Logo from '../../components/logo';
import getLogos from '../../utils/logos';
import styles from './index.module.css';
import { useLocation } from 'react-router-dom';


function CatalogPage () {

    const location = useLocation();
    const [queryString , setQueryString] = useState(location.search)
    const logos = getLogos();

    useEffect(() => {
        document.title = 'Catalog';
    })
 
    return(

        <PageWrapper>
            <Main layout="forms">
                <div className={styles.logoContainer}>

                    {logos.map(logo => {
                        const {qString , src , logoName} = logo;
                        const newQueryString = qString !== queryString ? qString : ''
                        return (<Logo
                                    href={`/catalog${newQueryString}`}
                                    src={src}
                                    logoName={logoName}
                                    handler={() => setQueryString(newQueryString)}
                               />
                        )
                    })}

                </div>
                <Title text="All offers"/>
                <Cars queryString={queryString} page='catalog'/>
              </Main>
        </PageWrapper>

    );
    
};

export default CatalogPage;