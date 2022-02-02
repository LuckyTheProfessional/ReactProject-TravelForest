//React Hooks
import { useEffect, useState } from "react";

//Database
import { db, timestamp } from "../firebaseConfig/firebase";


const useFirebase = (collection) => {
    const [document, setDocument] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const [isCancelled, setIsCancelled] = useState(false);

    const addDocument = async(newDoc) => {
        setIsPending(true);
        setError(null);
        setDocument(null);

        try {
          const createdAt = timestamp.fromDate(new Date());

          const doc = await db.collection(collection).add({...newDoc, createdAt});
          
          if (!doc) {
              throw new Error('Error oquired')
          }

          if (!isCancelled) {
            setDocument(doc);
            setIsPending(false);
            setError(null);
          }
        }
        catch(err) {
          if (!isCancelled) {
            setDocument(null);
            setIsPending(false);
            setError(err);
        }
        }
    }

    const deleteDocument = async (documentID) => {


      await db.collection(collection).doc(documentID).delete();
    }

    useEffect(() => {
        return () => setIsCancelled(true);
    }, [])

    return {document, isPending, error, addDocument, deleteDocument}
};

export default useFirebase;


