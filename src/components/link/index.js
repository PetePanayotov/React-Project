import React from 'react';
import styles from './index.module.css';


function Link({title , href, type}) {
    return (
        <div className={styles[`${type}-list-item`]}>
            <a href={href} className={styles[`${type}-link`]}>
                {title}
            </a>
        </div>
    );
};

export default Link