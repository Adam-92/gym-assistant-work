import { useEffect, useState } from "react";
import { getCarouselCharacters } from "../../../services/Activity";
import Carousel from "../../Carousel/Carousel";
import { WelcomeModalInterface } from "./WelcomeModal.model";
import "./WelcomeModal.css";

const WelcomeModal = () => {
  const [characters, setCharacters] = useState<WelcomeModalInterface[]>([]);

  useEffect(() => {
    getCarouselCharacters().then((data) => setCharacters(data));
  }, []);

  return (
    <article className="position-welcome-modal">
      <div className="message-welcome-modal">
        <h1>Welcome, User</h1>
        <p>Let us know what shape you are interested in.</p>
        <p>
          Don't worry at any time, you can change your targets in the settings
          tab.
        </p>
      </div>
      <Carousel characters={characters} />
    </article>
  );
};
export default WelcomeModal;
