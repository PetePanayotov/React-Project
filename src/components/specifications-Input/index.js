import React from 'react';
import styles from './index.module.css';

// function CharacteristicsBox(props) {
//     return (
//         <div className={styles.div}>
//             <input className={styles.left}/>
//             <input className={styles.right} onBlur={props.handleBlur}/>
//         </div>
//     );
// };

function CharacteristicsBox({inputsValue , handleBlur}) {
    return (
        <div className={styles.div}>
            <input value={inputsValue !== undefined ? inputsValue[0] : ''} className={styles.left}/>
            <input value={inputsValue !== undefined ? inputsValue[1] : ''} className={styles.right} onBlur={handleBlur}/>
        </div>
    );
};

export default CharacteristicsBox;