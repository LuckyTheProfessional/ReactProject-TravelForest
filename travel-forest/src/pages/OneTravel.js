import styles from './OneTravel.module.css';

import useOneDoc from '../hooks/useOneDoc';
import {useCollection } from '../hooks/useCollection';

import { useParams } from 'react-router-dom';

import { useContext, useEffect } from 'react';

//Components
// import oneTravelInfo from '../components/OneTravelInfo';
import OneTravelInfo from '../components/OneTravelInfo';
import CommentsForm from '../components/CommentsForm';
import CommentsList from '../components/CommentsList'

//Context
import { AuthContext } from '../context/AuthContext';

const OneTravel = () => {
  const { state } = useContext(AuthContext);
  const { id } = useParams();
  const { data: travel, isPending, error } = useOneDoc('travels', id);
  const { documents: comments, isPending: comPending, error: comError } = useCollection(
  'comments', 
  ['travelID', '==', id],
  ['createdAt', 'desc']
  );

  return (
    <div className={styles.oneTourAllBox}>
      { travel && <OneTravelInfo travelInfo={travel} /> }
      { error && <p>{error}</p> }
      { isPending && <p>Loading...</p> }

      {comments && <CommentsForm user={state.user} travelID={id}/>}

      {comments && <CommentsList comments={comments} currentUserID={state.user.uid}/>}
    </div>
  )
};

export default OneTravel;

