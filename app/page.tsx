import ProductCard from "@/components/ProductCard";
import producList from "@/public/MOCK_DATA.json"; 



export default function Home() {
  return (
    <>
      <ProductCard producList={producList}/>
    </>
  );
}
