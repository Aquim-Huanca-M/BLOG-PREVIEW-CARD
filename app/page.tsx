import ProductCard from "@/components/ProductCard";


export default async function Home() {
  let data = await fetch ('https://68f1af78b36f9750dee9ee40.mockapi.io/api/v1/cursitos')
  let products = await data.json()
  
  return (
    <>
      <ProductCard producList={products}/>
    </>
  );
}
