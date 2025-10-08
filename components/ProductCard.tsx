import Product from "./Product";
import "@/components/productCard.css";
import "@/public/MOCK_DATA.json";

interface ProductCardProps{
  producList: Product[];
}

const ProductCard = ({ producList }: ProductCardProps) => {
  return (
    <div className="product-card">
      {producList.map((product: Product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
};

export default ProductCard;