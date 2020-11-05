import React, { useState } from 'react';
import styles from './index.module.css';


function Logo ({src , logoName , logoFilter , currentFilters , setFilters}) {

    const [selectedState , setSelectedState] = useState(false);

    let newFilters = currentFilters.slice(0);
    const filterIndex = currentFilters.indexOf(logoFilter);

    if (filterIndex === -1) {

        newFilters.push(logoFilter);

    }else {
        newFilters = [
            ...newFilters.slice(0 , filterIndex),
            ...newFilters.slice(filterIndex + 1)
        ]
    };

    const handleClick = () => {
        setSelectedState(!selectedState);
        setFilters(newFilters);
    }

    return(
            <div onClick={handleClick} className={styles[`div-selected-${selectedState}`]}>
                <img className={styles.img} src={src} alt={logoName}></img>
            </div>
    );

};

export default Logo;