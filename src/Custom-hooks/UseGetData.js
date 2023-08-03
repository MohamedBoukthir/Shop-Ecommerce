import { useEffect, useState } from 'react'

import { db } from '../Firebase.config'
import { collection , onSnapshot } from 'firebase/firestore'

const UseGetData = (collectionName) => {

    const [data , setData] = useState([])
    const [loading , setLoading] = useState(true)
    const collectionRef = collection(db , collectionName)

    useEffect(() => {
        const getData = async() => {
          // Realtime Data Update
            await onSnapshot(collectionRef , (snapshot) => {
              setData(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
              setLoading(false);
            });    
        };
        getData();
    },[]);

  return (
    {data , loading}
  )
}

export default UseGetData