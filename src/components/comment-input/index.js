import React from  'react';
import Button from  '../button';
import styles from  './index.module.css';

function CommentInput({handler}) {

    return(
        <div className={styles.container}>
            <textarea id="textArea" className={styles.textArea} placeholder="Ask a question or leave a comment here..."/>
            <Button type="comment" text="Comment" handler={handler}/>
        </div>
    );

};

export default CommentInput;