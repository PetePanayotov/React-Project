import React , {Component} from 'react';
import {withRouter} from 'react-router-dom';
import UserContext from '../../Context';
import styles from './index.module.css';
import Car from '../car';


class Cars extends Component{

    constructor(props) {
        super(props);

        this.state = {
            
            cars: [],
            
        };

    };

    static contextType = UserContext;

    componentDidMount() {
        const {page} = this.props;
        const {isAdmin} = this.context;

        if (page === 'profile' && !isAdmin) {
            
            (async() => {
               
                const queryString = this.props.location.search;
                const startIndex = queryString.indexOf('=');
                const id = queryString.substring(startIndex + 1);
                const url = `http://localhost:9999/api/user/${id}`;
                
                const promise = await fetch(url);
               
                const user = await promise.json();

                const {likedCars} = user;

                this.setState({
                    cars: likedCars
                })

            })();

            
            
        }else {
        
            (async() => {

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

        }
    };


    render() {
        
        const {page} = this.props;
        const {queryString} = this.props;
        const {isAdmin} = this.context;
        
        let {cars} = this.state;
        cars = cars.reverse();

        if (page === 'catalog'  && queryString !== '') {
            
            const startIndex = queryString.indexOf('=');
            const brand = queryString.substr(startIndex + 1);
    
            cars = cars.filter(car => car.brand.toLowerCase() === brand);

        }else if(page === 'profile' && isAdmin) {

            cars = cars.sort((a , b) => {

                const firstLikes = a.likes.length;
                const secondLikes = b.likes.length;

                return secondLikes - firstLikes;

            });

            cars = cars.slice(0 , 10);

        };

        return (
            <div className={styles.container}>
                {cars.map((car , index) => {

                    const {_id , brand , model , price , imageUrl , likes } = car;

                    return(
                        <Car
                            page={page}
                            isAdmin={isAdmin}
                            likes={likes.length}
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