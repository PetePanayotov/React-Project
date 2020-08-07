import React, { useContext } from 'react';
import UserContext from '../../Context';
import Button from '../button';
import styles from './index.module.css';



function Comment({author , comment , time , handler}) {

    const context = useContext(UserContext);
    const {isAdmin} = context;

    return (
        <div className={styles.container}>
            <p className={styles['author-paragraph']}>
                {author} 

                <label className={styles.label}>
                    {time}
                </label>
            </p>
            <p className={styles['comment-paragraph']}>{comment}</p>
            {
                isAdmin &&
                <Button type="remove" text="Remove" handler={handler}/>
            }
        </div>
    );

};

export default Comment;