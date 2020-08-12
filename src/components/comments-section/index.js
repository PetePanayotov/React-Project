import React, { useContext , useState, useEffect , useCallback} from 'react';
import {useLocation} from 'react-router-dom';
import UserContext from '../../Context';
import Comment from '../comment';
import Button from '../button';
import CommentInput from '../comment-input';
import styles from './index.module.css';
import detailsPageHandlers from '../../utils/details-page-handlers';
import getQueryValue from '../../utils/getQueryValue';


function CommentsSection() {

    const location = useLocation();
    const context = useContext(UserContext);
    const {user} = context;
    const {username} = user;

    const [car , setCar] = useState( { comments: [] } );
    const [justMount , setJustMount] = useState(true);
    const [btnIsPressed , setBtnIsPressed] = useState(false)

    const getCar = useCallback(async () => {

        const id = getQueryValue(location);
        const url = `http://localhost:9999/api/car/${id}`

        const promise = await fetch(url);
        let response = await promise.json();
        response.comments = response.comments.reverse();

        setCar(response);
        
    } , []);

    useEffect(() => {

        if (!justMount) {
            
            getCar()
        }


    }, [justMount , btnIsPressed]);

    const carId = car._id;
    const {comment , removeComment , loadComments} = detailsPageHandlers;
    let {comments} = car;
    
    return (
        <div className={styles.container}>
            
            <Button type="load" text="Load" handler={(event) => loadComments(event , justMount , setJustMount , setCar)}/>
            {
                 comments.map((string , index) => {
                    const [author , comment , time] = JSON.parse(string);
                    
                    return <Comment  key={index} author={author} time={time} comment={comment} 
                                handler={() => removeComment(carId ,string , btnIsPressed , setBtnIsPressed)}
                            />
                })
            }
            {
                !justMount &&
                <CommentInput handler={(event) => comment(event ,carId , username , btnIsPressed , setBtnIsPressed)}/>
            }
        </div>
    );

};

export default CommentsSection;