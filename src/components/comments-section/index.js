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
    let array = commentsArray.slice(0);
    // array = array.reverse();

    const {comment , removeComment} = detailsPageHandlers;

    return (
        <div className={styles.container}>
            <p className={styles.title}>Comments</p>
            {
                array.map(string => {
                    const [author , comment , time] = JSON.parse(string);
                    
                    return <Comment author={author} time={time} comment={comment} 
                                handler={(event) => removeComment(event, history , carId ,string)}
                            />
                })
            }
            <CommentInput handler={(event) => comment(event , history , carId , username)}/>
        </div>
    );

};

export default CommentsSection;