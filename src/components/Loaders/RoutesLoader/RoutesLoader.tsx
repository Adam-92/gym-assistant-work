import "./RoutesLoader.css";
import Transition from "src/components/Transition/Transition";
const RoutesLoader = () => {
  return (
    <Transition>
      <div className="container-ellipsis">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Transition>
  );
};

export default RoutesLoader;
