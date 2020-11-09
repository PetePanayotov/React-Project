import React from 'react';
import styles from './index.module.css';
import {Link} from 'react-router-dom';

function LinkComponent({title , href, type}) {
    return (
        <li className={styles[`${type}-li`]}>
            <Link to={href} className={styles[`${type}-link`]} key={title}>
                {title}
            </Link>
        </li>
    );
};

export default LinkComponent