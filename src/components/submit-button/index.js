import React from  'react';
import styles from './index.module.css';

function SubmitButton ({type , handler , text}) {

    return(
        <input className={styles[type]} type="submit" value={text} onClick={handler}/>
    )

}

export default SubmitButton
