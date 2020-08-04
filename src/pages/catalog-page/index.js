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
            queryString: this.props.location.search,
        }

    };

    updateState = (newQueryString) => {

        const newState = {
            queryString: newQueryString
        }

        this.setState(newState);
    };

    componentDidMount() {
        document.title = 'Catalog'
    }

    render() {

        const logos = getLogos();
        const {queryString} = this.state
        
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
                                        handler={() =>this.updateState(newQueryString)}
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