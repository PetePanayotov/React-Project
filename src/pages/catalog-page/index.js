import React , { useState, useEffect} from 'react';
import PageWrapper from '../../components/page-wrapper';
import Wrapper from '../../components/wrapper';
import Car from '../../components/car';
import Title from '../../components/title';
import Logo from '../../components/logo';
import getLogos from '../../utils/logos';
import handlers from '../../utils/catalog-page-handlers';


const CatalogPage = () => {

    const [filteredCars , setFilteredCars] = useState([]);
    const [filters , setFilters] = useState([]);
    const {filterCars} = handlers;
    const logos = getLogos();

    useEffect(() => {
        
        document.title = 'Catalog';
        filterCars(filters , setFilteredCars);
        
    } , [filters , setFilters , filterCars]);

    
    return(

        <PageWrapper>
                <Wrapper styling="logoContainer">

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

                </Wrapper>
                <Title text="All offers"/>

                <Wrapper styling="cars-container">
                    {filteredCars.map((car) => {
                        
                        const {_id , brand , model , price , likes } = car;

                        return (
                            
                            <Car
                                key={_id}
                                likes={likes.length}
                                id={_id}
                                brand={brand}
                                model={model}
                                price={price}
                                imageUrl={car.hasOwnProperty('imageUrl') ? car.imageUrl : car.images[0]}    
                            />
                
                        );
                    })}
                </Wrapper>
        </PageWrapper>

    );
    
};

export default CatalogPage;