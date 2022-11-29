import { useState, useEffect, useCallback } from "react";
import { DocumentData, DocumentSnapshot } from "firebase/firestore";
import { parseError } from "src/errors/parseError";

const useFetchData = (
  firebaseRequest: () => Promise<DocumentSnapshot<DocumentData>>
) => {
  const [data, setData] = useState<DocumentData>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  const fetchData = useCallback(async () => {
    try {
      const request = await firebaseRequest();

      if (request.exists()) {
        setData(request.data().data);
      } else setData(undefined);
    } catch (error) {
      setIsError(parseError(error));
    } finally {
      setIsLoading(false);
    }
  }, [firebaseRequest]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, isError };
};

export default useFetchData;
