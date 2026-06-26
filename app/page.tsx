import Image from "next/image";

async function getProducts() {
      const  res =await fetch("https://dummyjson.com/products")
      if(!res.ok){
            throw new Error("product not found")
      }
      return await res.json()
}
export default async function Home() {
      const data = await getProducts()
      return (
            <>
                  <h1>Products </h1>
                  <hr /><br />
                  {data.products.map((product:any) => (
                      <div key={product.id}>
                            <Image src={product.thumbnail} alt={product.title} width={200} height={200} />
                            <p>{product.title}</p><br />
                            <p>{product.description}</p> <br />
                            <span>{product.price}</span> <br />
                            <hr/>
                            <br/>
                      </div>
                  ))}
            </>
      );
}
