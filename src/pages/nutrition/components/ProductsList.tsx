import DataStatusHandler from "src/components/DataStatusHandler/DataStatusHandler";
import { useUser } from "src/contexts/user/hooks/useUser";
import { Product } from "./ProductsList.model";

export const ProductsList = () => {
  const { currentUser } = useUser();

  return (
    <DataStatusHandler isLoading={false} data={[]} error={""}>
      {(data) => (
        <article>
          <header>
            <h5>This will get all user products</h5>
          </header>
          <ul>
            {data?.map((product: Product) => {
              return (
                <div style={{ margin: "1rem" }}>
                  <li style={{ color: "green", fontWeight: "bold" }}>
                    {product.name}
                  </li>
                  <li>Carbohydrates: {product.carbohydrates}</li>
                  <li>Proteins: {product.proteins}</li>
                  <li>Fat: {product.fat}</li>
                  <li>Units: {product.units}</li>
                  <li>Cal: {product.calories}</li>
                </div>
              );
            })}
          </ul>
        </article>
      )}
    </DataStatusHandler>
  );
};
