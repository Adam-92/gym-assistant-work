import { BodyIconProps } from "src/model/BodyIcon.model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BodyIcon.css";

const BodyIcon = ({ title, icon, selectIcon, active }: BodyIconProps) => {
  return (
    <div
      className="container-body-icon noSelect"
      onClick={() => selectIcon(title)}
    >
      <div className={`pic-body-icon ${active && "marked-body-icon"}`}>
        <FontAwesomeIcon icon={icon} size="2x" />
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default BodyIcon;
