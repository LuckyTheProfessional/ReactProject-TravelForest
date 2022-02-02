import { useEffect, useState } from "react";

import { db } from '../firebaseConfig/firebase';

const useOneDoc = (collection, document) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [isCancelled, setIsCancelled] = useState(false);

  useState(() => {
  setIsPending(true);
  setError(null);

  const fetchDocument = async() => {
  
  try {
  const response = await db.collection(collection).doc(document).get();
  const data = response.data();
  
  if (!isCancelled) {
      setData(data);
      setError(null);
      setIsPending(false);
  }
  } 
  catch(err) {
    if (!isCancelled) {
        setData(null);
        setError(err);
        setIsPending(false);
    }
  }
  }

  fetchDocument();

  }, [])

  useEffect(() => {
    return () => setIsCancelled(true);
  },[])

  return {data, isPending, error};
};

export default useOneDoc;
