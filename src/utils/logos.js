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
                href: "?brand=mercedes",
                src: mercedesLogo,
                logoName: "Mercedes"
            },

            {
                href: "?brand=bmw",
                src: bmwLogo,
                logoName: "BMW"
            },

            {
                href: "?brand=audi",
                src: audiLogo,
                logoName: "Audi"
            },

            {
                href: "?brand=porsche",
                src: porscheLogo,
                logoName: "Porsche"
            },

            {
                href: "?brand=honda",
                src: hondaLogo,
                logoName: "Honda"
            },

            {
                href: "?brand=chevrolet",
                src: vetteLogo,
                logoName: "Chevrolet"
            },

            {
                href: "?brand=maserati",
                src: maseratiLogo,
                logoName: "Maserati"
            },

            {
                href: "?brand=lamborghini",
                src: lamboLogo,
                logoName: "Lamborghini"
            },

            {
                href: "?brand=ferrari",
                src: ferrariLogo,
                logoName: "Ferrari"
            },

        ]
    );

};

export default getLogos;