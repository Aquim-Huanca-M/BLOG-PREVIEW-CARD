import Product from "./Product";
import "@/components/productCard.css";

const ProductCard = (props:any) => {
  return (
    <div className="product-card">
        <Product/>
    </div>
  );
};

export default ProductCard