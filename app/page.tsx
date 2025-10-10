import ProductCard from "@/components/ProductCard";




export default async function Home() {
  let data = await fetch ('https://68e936bef2707e6128ce09a7.mockapi.io/api/v1/products')
  let products = await data.json()
  
  return (
    <>
      <ProductCard producList={products}/>
    </>
  );
}
