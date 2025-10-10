import { fraunces,montserrat } from "@/app/layout";
import "@/components/product.css";
import { Fraunces, Montserrat } from "next/font/google";
import ButtonSection from "./ButtonSection";

interface ProductProps{
  product: Product;
}

const Product = ({product}: ProductProps ) => {
  return <section className="background-white">
    <img className="imagen" src={product.image} alt="imagen"/>
    <div className="detalles">
      <h3 className={`${montserrat.className} font-semibold`}>{product.category}</h3>
      <h2 className={`${fraunces.className} font-semibold`}>{product.name}</h2>
      <p>
      {product.description}
      </p>
      <div>
      <span className={`${fraunces.className} font-semibold precio`} > {`$${product.price}`} </span>
      <span className="precio-antiguo">  {`$${product.old_price}`}</span>
      </div>
      <ButtonSection/>
    </div>
    </section>
};

export default Product