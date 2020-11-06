import React, { useContext , useState, useEffect , useCallback} from 'react';
import {useLocation} from 'react-router-dom';
import UserContext from '../../Context';
import Comment from '../comment';
import Button from '../button';
import CommentInput from '../comment-input';
import styles from './index.module.css';
import detailsPageHandlers from '../../utils/details-page-handlers';
import getQueryValue from '../../utils/getQueryValue';


const CommentsSection = ({username , carId , comments , pressed , setPressed}) => {

    // const location = useLocation();
    // const context = useContext(UserContext);
    // const {user} = context;
    // const {username} = user;

    // const [car , setCar] = useState( { comments: [] } );
    // const [justMount , setJustMount] = useState(true);
    // const [btnIsPressed , setBtnIsPressed] = useState(false)

    // const getCar = useCallback(async () => {

    //     const id = getQueryValue(location);
    //     const url = `http://localhost:9999/api/car/${id}`

    //     const promise = await fetch(url);
    //     let response = await promise.json();
    //     response.comments = response.comments.reverse();

    //     setCar(response);
        
    // } , []);

    // useEffect(() => {

    //     if (!justMount) {
            
    //         getCar()
    //     }


    // }, [justMount , btnIsPressed]);

    // const carId = car._id;
    const {comment , removeComment , loadComments} = detailsPageHandlers;
    // let {comments} = car;
    
    
    return (
        <div className={styles.container}>
            
            <Button type="load" text="Load" handler={loadComments}/>
            
            {
                comments.map((string , index) => {

                    const [author , comment , time] = JSON.parse(string);
                    
                    return <Comment  
                                key={index} 
                                author={author} 
                                time={time} 
                                comment={comment} 
                                handler={() => removeComment(carId , string , pressed , setPressed)}
                            />
                })
            }

            <CommentInput handler={(event) => comment(event , carId , username , pressed , setPressed)}/>

        </div>
    );

};


export default CommentsSection;