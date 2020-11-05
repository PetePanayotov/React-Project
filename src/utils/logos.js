import mercedesLogo from '../images/mercedesLogo.jpg';
import bmwLogo from '../images/bmwLogo.jpg';
import audiLogo from '../images/audiLogo.jpg';
import hondaLogo from '../images/hondaLogo.jpg';
import maseratiLogo from '../images/maseratiLogo.jpg';
import lamboLogo from '../images/lamboLogo.jpg';
import vetteLogo from '../images/vetteLogo.jpg';
import ferrariLogo from '../images/ferrariLogo.jpg';
import porscheLogo from '../images/porcheLogo.jpg'


const getLogos = () => { 

    return (
        
        [
            {
                logoFilter: 'Mercedes',
                imageURL: mercedesLogo,
                logoName: "Mercedes"
            },

            {
                logoFilter: 'BMW',
                imageURL: bmwLogo,
                logoName: "BMW"
            },

            {
                logoFilter: 'Audi',
                imageURL: audiLogo,
                logoName: "Audi"
            },

            {
                logoFilter: 'Porsche',
                imageURL: porscheLogo,
                logoName: "Porsche"
            },

            {
                logoFilter: 'Honda',
                imageURL: hondaLogo,
                logoName: "Honda"
            },

            {
                logoFilter: 'Chevrolet',
                imageURL: vetteLogo,
                logoName: "Chevrolet"
            },

            {
                logoFilter: 'Maserati',
                imageURL: maseratiLogo,
                logoName: "Maserati"
            },

            {
                logoFilter: 'Lamborghini',
                imageURL: lamboLogo,
                logoName: "Lamborghini"
            },

            {
                logoFilter: 'Ferrari',
                imageURL: ferrariLogo,
                logoName: "Ferrari"
            },

        ]
    );

};

export default getLogos;