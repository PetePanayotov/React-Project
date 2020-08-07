import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../Context';
import Comment from '../comment';
import CommentInput from '../comment-input';
import styles from './index.module.css';
import detailsPageHandlers from '../../utils/details-page-handlers';


function CommentsSection({commentsArray ,carId}) {

    const context = useContext(UserContext);
    const history = useHistory();
    const {username} = context.user;

    return (
        <div className={styles.container}>
            <p className={styles.title}>Comments</p>
            {
                commentsArray.map(string => {
                    const [author , comment] = JSON.parse(string);
                    
                    return <Comment author={author} comment={comment}/>
                })
            }
            <CommentInput handler={(event) => detailsPageHandlers.comment(event , history , carId , username)}/>
        </div>
    );

};

export default CommentsSection;