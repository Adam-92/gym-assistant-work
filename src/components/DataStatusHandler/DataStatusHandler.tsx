import { DataStatusHandlerProps } from "./DataStatusHandler.model";

/* 
  Nie do końca jestem przekonany, jak tutaj otypować props. 
  Children powinnien być poza destruktyrezacją, ale wtedy wyskakuje błąd.
*/
const DataStatusHandler = ({
  isLoading,
  isError,
  data,
  children,
}: DataStatusHandlerProps) => {
  return (
    /* 
      Może można krócej - "mniej skomplikowanie" z tymi warunkami, ale chciałem być
      pewny... ;-D
    */
    <>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Something went wrong please refresh the page</h2>}
      {!isLoading && !data && <h2>Sorry, but we didn't find any data</h2>}
      {!isLoading && data && children}
    </>
  );
};

export default DataStatusHandler;
