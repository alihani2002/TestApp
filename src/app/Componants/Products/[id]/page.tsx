import { taintUniqueValue } from "next/dist/server/app-render/rsc/taint";
import Link from "next/link";
import { title } from "process";
async function getProducts() {
    const res = await fetch('https://dummyjson.com/products')
    
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
interface IProps{}
const ProductsPage=async({}:IProps)=>{
    const {products} = await getProducts();
     return(
        <div>
         {
        products.map(({id,title}:{id:number,title:string})=>
        <h3 key={id}><Link href={`/products/${id}`}>{title}</Link>
        </h3>
        )}
   
        </div>
    );
};
export default ProductsPage;