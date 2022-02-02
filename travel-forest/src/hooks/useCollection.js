import { useEffect, useState, useRef } from "react"
import { db } from '../firebaseConfig/firebase';

export const useCollection = (collection, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false);

  // if we don't use a ref --> infinite loop in useEffect
  // _query is an array and is "different" on every function call
  const query = useRef(_query).current
  const orderBy = useRef(_orderBy).current

  useEffect(() => {
    let ref = db.collection(collection)

    if (query) {
      ref = ref.where(...query)
    }
    if (orderBy) {
      ref = ref.orderBy(...orderBy)
    }

    setIsPending(true);
    setDocuments(null);
    setError(null)

    const unsubscribe = ref.onSnapshot(snapshot => {
      let results = []
      snapshot.docs.forEach(doc => {
        results.push({...doc.data(), id: doc.id})
      });
      
      // update state
      setDocuments(results)
      setIsPending(false)
      setError(null)
    }, error => {
      console.log(error)
      setError('could not fetch the data')
      setDocuments(null);
      setIsPending(false);
    })

    // unsubscribe on unmount
    return () => unsubscribe()

  }, [collection, query, orderBy])

  return { documents, error, isPending }
}


