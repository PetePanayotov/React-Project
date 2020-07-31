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
                qString: "?brand=mercedes",
                src: mercedesLogo,
                logoName: "Mercedes"
            },

            {
                qString: "?brand=bmw",
                src: bmwLogo,
                logoName: "BMW"
            },

            {
                qString: "?brand=audi",
                src: audiLogo,
                logoName: "Audi"
            },

            {
                qString: "?brand=porsche",
                src: porscheLogo,
                logoName: "Porsche"
            },

            {
                qString: "?brand=honda",
                src: hondaLogo,
                logoName: "Honda"
            },

            {
                qString: "?brand=chevrolet",
                src: vetteLogo,
                logoName: "Chevrolet"
            },

            {
                qString: "?brand=maserati",
                src: maseratiLogo,
                logoName: "Maserati"
            },

            {
                qString: "?brand=lamborghini",
                src: lamboLogo,
                logoName: "Lamborghini"
            },

            {
                qString: "?brand=ferrari",
                src: ferrariLogo,
                logoName: "Ferrari"
            },

        ]
    );

};

export default getLogos;