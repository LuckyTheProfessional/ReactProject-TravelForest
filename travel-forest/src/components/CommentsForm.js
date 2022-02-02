import styles from './CommentsForm.module.css'

//ReactHooks
import { useState } from 'react';

import useFirebase from '../hooks/useFirebase';

const CommentsForm = ({ user, travelID }) => {
   const [comment, setComment] = useState('');
   const { addDocument, isPending } = useFirebase('comments');


   const handleSubmit = (e) => {
    e.preventDefault();
    
    addDocument({comment, user: user.displayName, travelID, userID: user.uid });

    setComment('');
   }

    return (
      <div className={styles.allCommentsBox}>
        <div className={styles.commentsLine}></div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            <textarea
            onChange={e => setComment(e.target.value)}
            value={comment}
            required
            placeholder='Add comment...'
            ></textarea>
          </label>

          {!isPending && <button type='btn'>Add Comment</button>}
          {isPending && <button type='btn' disabled>Adding comment...</button>}
        </form>

   </div>
  )
};

export default CommentsForm;
