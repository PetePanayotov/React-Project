import React , {Component} from 'react';
import PageWrapper from '../../components/page-wrapper';
import Main from '../../components/main';
import Cars from '../../components/cars-container';
import Title from '../../components/title';
import Logo from '../../components/logo';
import getLogos from '../../utils/logos';
import styles from './index.module.css';


class CatalogPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            queryString: '',
        }

    };

    updateState = (newQueryString) => {

        this.setState({
            queryString: newQueryString
        });
    };

    render() {

        const logos = getLogos();
        const {queryString} = this.state

        return(
            <PageWrapper>
                <Main layout="forms">

                    <div className={styles.logoContainer}>
                        {logos.map(logo => {

                            const {href , src , logoName} = logo;

                            return (<Logo
                                        href={href}
                                        src={src}
                                        logoName={logoName}
                                        handler={() =>this.updateState(href)}
                                   />
                            )
                        })}
                    </div>
                    <Title text="All offers"/>
                    <Cars queryString={queryString} page='catalog'/>
                  </Main>
            </PageWrapper>
        );
       
    }

};

export default CatalogPage;