import { useState, useEffect } from "react";
import { getUserProducts } from "src/firebase/services/nutritionActivity";
import { getAllProducts } from "src/firebase/services/nutritionActivity";
import { parseError } from "src/errors/parseError";
import { useUser } from "src/contexts/user/hooks/useUser";

export const useProducts = () => {
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { currentUser } = useUser();

  const fetchAllProducts = async () => {
    const request = await getAllProducts();
    const data = await request.data();
    return data;
  };

  const fetchProducts = async () => {
    try {
    } catch (error) {
      setError(parseError(error));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {}, []);
};
