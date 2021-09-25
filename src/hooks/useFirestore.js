import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection, limit) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    if (collection === "images") {
      const unSub = projectFirestore
        .collection(collection)
        .orderBy("createdAt", "desc")
        .limit(limit)
        .onSnapshot((snap) => {
          let documents = [];
          snap.forEach((doc) => {
            documents.push({ ...doc.data(), id: doc.id, name: doc.name });
          });

          setDocs(documents);
        });

      return () => unSub();
    }
    if (collection === "customers") {
      const unsub = projectFirestore
        .collection(collection)
        .orderBy("createdAt", "desc")
        .onSnapshot((snap) => {
          let documents = [];
          snap.forEach((doc) => {
            documents.push({ ...doc.data(), id: doc.id, name: doc.name });
          });
          setDocs(documents);
        });

      return () => unsub();
    }
  }, [collection, limit]);

  return { docs };
};

export default useFirestore;
