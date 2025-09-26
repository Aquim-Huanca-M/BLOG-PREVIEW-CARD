//rafce

import "@/components/butonSection.css";
import { fraunces,montserrat } from "@/app/layout";

const ButtonSection = () => {
  return (
    <div className="button-container">
        <button className={`${montserrat.className} card-button`}>
            <i className="icon-card" >Add to card</i>
        </button>
    </div>
  );
};

export default ButtonSection