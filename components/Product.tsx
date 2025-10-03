import { fraunces,montserrat } from "@/app/layout";
import "@/components/product.css";
import { Fraunces, Montserrat } from "next/font/google";
import ButtonSection from "./ButtonSection";


const Product = () => {
  return <section className="background-white">
    <img src="https://i26.servimg.com/u/f26/20/62/62/11/image-10.jpg" alt="imagen"/>
    <div className="detalles">
      <h3 className={`${montserrat.className} font-semibold`}>Perfume</h3>
      <h2 className={`${fraunces.className} font-semibold`}>Gabrielle Essence Eau De Perfum</h2>
      <p>
      A floral, solar and voluptuous interpretation composed by Olivier Polge, 
      Perfumer-Creator for the House of CHANEL.
      </p>
      <div>
      <span className={`${fraunces.className} font-semibold precio`} >$149.99 </span>
      <span className="precio-antiguo">  $169.99</span>
      </div>
      <ButtonSection/>
    </div>
    </section>
};

export default Product