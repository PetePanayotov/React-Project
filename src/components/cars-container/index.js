import React , {Component} from 'react';
import styles from './index.module.css';
import Car from '../car';

class Cars extends Component{

    constructor(props) {
        super(props);

        this.state = {
            
            cars: []

        }

    };

    componentDidMount() {
        
        (async() => {

            const url = 'http://localhost:9999/api/car/';
            const promise = await fetch(url);
            
            const response = await promise.json()
          
            const bestOffers = response.filter(car => car.isVipOffer === true);
            
            this.setState({
                cars: bestOffers
            });

        })();
    };


    render() {

        const {cars} = this.state

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
                    )

                })}
            </div>
        )
    }

};

export default Cars;