import { useState, useEffect, useCallback } from "react";
import { DocumentSnapshot } from "firebase/firestore";
import { parseError } from "src/errors/parseError";

const useFetchData = <T>(
  firebaseRequest: () => Promise<DocumentSnapshot<{ data: T }>>
) => {
  const [data, setData] = useState<T>();
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
