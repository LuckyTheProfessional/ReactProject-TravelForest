import styles from './CommentsList.module.css';

import useFirebase from '../hooks/useFirebase';

const CommentsList = ({ comments, currentUserID }) => {
  const { deleteDocument, isPending, error } = useFirebase('comments');


  if (comments.length === 0) {
      return (
          <div className={styles.noComments}>No comments yet... 😭</div>
      )
  }

  const handleDelete = (commentID) => {
    deleteDocument(commentID);
  }

  return (
    <div className={styles.commentsListBox}>
        {comments.map((comment) => (
            <div key={comment.id} className={styles.oneComment}>
                <p className={styles.userName}>{ comment.user }: </p>
                <p className={styles.userComment}>{ comment.comment }</p>
                {comment.userID === currentUserID && 
                <i 
                onClick={() => handleDelete(comment.id)}
                className="fas fa-trash-alt"></i>}
            </div>
        ))}
        
    </div>
  )
};

export default CommentsList;
