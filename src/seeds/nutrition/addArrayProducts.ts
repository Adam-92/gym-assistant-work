import { setDoc, doc } from "firebase/firestore";
import { db } from "src/firebase/config/firebase";
import { arrayNewProducts } from "src/firebase/converters";
import { User } from "firebase/auth";
import { Product } from "src/pages/nutrition/components/ProductsList.model";

export const addArrayProducts = async (
  productsArray: Product[],
  currentUser: User | null
) => {
  const ref = doc(db, `/userNutritionProducts/${currentUser?.uid}`);
  await setDoc(ref.withConverter(arrayNewProducts), {
    data: productsArray,
  });
};
