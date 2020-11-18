import React, { useState } from 'react';
import Comment from '../comment';
import Button from '../button';
import CommentInput from '../comment-input';
import styles from './index.module.css';
import detailsPageHandlers from '../../utils/details-page-handlers';

const {comment , removeComment , loadComments} = detailsPageHandlers;


const CommentsSection = ({username , carId , comments , pressed , setPressed}) => {

    const [displayComments , setDisplayComments] = useState(false);

    
    return (
        <div className={styles.container}>
            
            <Button type="load" text="Load" handler={(e) => loadComments(e , setDisplayComments)}/>
            
            {
                displayComments && 

                comments.map((string , index) => {

                    const [author , comment , time] = JSON.parse(string);
                    
                    return <Comment  
                                key={index} 
                                author={author} 
                                time={time} 
                                comment={comment} 
                                handler={() => removeComment(carId , string  , setPressed)}
                            />
                })

            }

            {
                displayComments && comments.length === 0 &&

                <p>Be the first to comment</p>
            }

            {
                displayComments &&

                <CommentInput handler={(event) => comment(event , carId , username , setPressed)}/>
            }

        </div>
    );

};

export default CommentsSection;