import React from 'react';
import styles from './index.module.css';


function Comment({author , comment}) {

    return (
        <div className={styles.container}>
            <p className={styles['author-paragraph']}>{author}</p>
            <p className={styles['comment-paragraph']}>{comment}</p>
        </div>
    );

};

export default Comment;