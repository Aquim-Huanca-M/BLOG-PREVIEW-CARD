//rafce

import "@/components/butonSection.css";
import { figtree } from "@/app/layout";

interface ProductProps{
  product: Product;
}

const ButtonSection = ({product}: ProductProps ) => {
  return (
    <div className="button-container">
        <button className={`${figtree.className} card-button`}>
            <i className="icon-card"></i>
            <h2 className={`${figtree.className} font-semibold`}>{product.name2}</h2>
        </button>
    </div>
  );
};

export default ButtonSection


