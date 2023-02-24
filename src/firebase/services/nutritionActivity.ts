import { getDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { arrayNewProducts } from "../converters";

export const getAllProducts = async () => {
  const request = await getDoc(
    doc(db, `forAllUsersProducts/data`).withConverter(arrayNewProducts)
  );
  return request;
}

export const getUserProducts = async (userId: string) => {
  const request = await getDoc(
    doc(db, `userNutritionProducts/${userId}`).withConverter(arrayNewProducts)
  );
  return request;
};
