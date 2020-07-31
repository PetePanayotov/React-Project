import React , {Component} from 'react';
import {withRouter} from 'react-router-dom';
import styles from './index.module.css';
import Car from '../car';
import PageButton from '../pagesButtons';

class Cars extends Component{

    constructor(props) {
        super(props);

        this.state = {
            
            cars: [],
            
        };

    };

    componentDidMount() {
        
        (async() => {

            const {page} = this.props;
            const url = 'http://localhost:9999/api/car/';
            const promise = await fetch(url);
            const response = await promise.json();

            let cars = response.slice(0);
            
            if (page === 'home') {
              
                cars = cars.filter(car => car.isVipOffer === true);

            };
            
            this.setState({
                cars
            });

        })();
    };


    render() {
        
        const {page} = this.props;
        const {queryString} = this.props;
        const {pages} = this.state;
        let {cars} = this.state;
        console.log('this is from the container',queryString)
        if (page === 'catalog'  && queryString !== '') {
            
            const startIndex = queryString.indexOf('=');
            const brand = queryString.substr(startIndex + 1);
    
            cars = cars.filter(car => car.brand.toLowerCase() === brand);
        };

        return (
            <div className={styles.container}>
                {cars.map((car , index) => {

                    const {_id , brand , model , price , imageUrl } = car;

                    return(
                        <Car
                            key={index}
                            id={_id}
                            brand={brand}
                            model={model}
                            price={price}
                            imageUrl={imageUrl}    
                        />
                       
                    );

                })}

            </div>
        )
        
    }

};

export default withRouter(Cars);