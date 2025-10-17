import { figtree } from "@/app/layout";
import "@/components/product.css";
import ButtonSection from "./ButtonSection";

interface ProductProps{
  product: Product;
}

const Product = ({product}: ProductProps ) => {
  return <section className="background-white">
    <img className="imagen" src={product.image} alt="imagen"/>
    <div className="detalles">
      <h3 className={`${figtree.className} font-semibold`}>Learned </h3>
      <span className={`${figtree.className} font-semibold date`} > {`${product.date}`} </span>
      
      <p>
      {product.description}
      </p>
      <ButtonSection product={product} />
    </div>
    </section>
};

export default Product 