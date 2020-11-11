import React , { useState, useEffect} from 'react';
import PageWrapper from '../../components/page-wrapper';
import Main from '../../components/main';
import CarsContainer from '../../components/cars-container';
import Car from '../../components/car';
import Title from '../../components/title';
import Logo from '../../components/logo';
import getLogos from '../../utils/logos';
import styles from './index.module.css';
import handlers from '../../utils/catalog-page-handlers';


const CatalogPage = () => {

    const [filteredCars , setFilteredCars] = useState([]);
    const [filters , setFilters] = useState([]);
    const {filterCars} = handlers;
    const logos = getLogos();

    useEffect(() => {
        console.log('catalog Page')
        document.title = 'Catalog';
        filterCars(filters , setFilteredCars);
        
    } , [filters , setFilters , filterCars]);

    
    return(

        <PageWrapper>
            <Main layout="forms">
                <div className={styles.logoContainer}>

                    {logos.map((logo , i ) => {
                        
                        const {imageURL , logoFilter ,logoName} = logo;
 
                        return (<Logo
                                    key={i}
                                    src={imageURL}
                                    logoName={logoName}
                                    logoFilter={logoFilter}
                                    currentFilters={filters}
                                    setFilters={setFilters}
                               />
                        )
                    })}

                </div>
                <Title text="All offers"/>

                <CarsContainer>
                    {filteredCars.map((car) => {
                        
                        const {_id , brand , model , price , imageUrl , likes } = car;

                        return (
                            
                            <Car
                                key={_id}
                                likes={likes.length}
                                id={_id}
                                brand={brand}
                                model={model}
                                price={price}
                                imageUrl={imageUrl}    
                            />
                
                        );
                    })}
                </CarsContainer>
              </Main>
        </PageWrapper>

    );
    
};

export default CatalogPage;