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
                id: '0',
                qString: "?brand=mercedes",
                src: mercedesLogo,
                logoName: "Mercedes"
            },

            {
                id: '1',
                qString: "?brand=bmw",
                src: bmwLogo,
                logoName: "BMW"
            },

            {
                id: '2',
                qString: "?brand=audi",
                src: audiLogo,
                logoName: "Audi"
            },

            {
                id: '3',
                qString: "?brand=porsche",
                src: porscheLogo,
                logoName: "Porsche"
            },

            {
                id: '4',
                qString: "?brand=honda",
                src: hondaLogo,
                logoName: "Honda"
            },

            {
                id: '5',
                qString: "?brand=chevrolet",
                src: vetteLogo,
                logoName: "Chevrolet"
            },

            {
                id: '6',
                qString: "?brand=maserati",
                src: maseratiLogo,
                logoName: "Maserati"
            },

            {
                id: '7',
                qString: "?brand=lamborghini",
                src: lamboLogo,
                logoName: "Lamborghini"
            },

            {
                id: '8',
                qString: "?brand=ferrari",
                src: ferrariLogo,
                logoName: "Ferrari"
            },

        ]
    );

};

export default getLogos;