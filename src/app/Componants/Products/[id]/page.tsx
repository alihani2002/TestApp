import { taintUniqueValue } from "next/dist/server/app-render/rsc/taint";
import Link from "next/link";
import { title } from "process";
import { Suspense } from "react";
interface IProps{
    params:{
        id:string;
    }
}

async function getProducts(productId:string) {
    const res = await fetch('https://dummyjson.com/products/${productId}')
    
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
const ProductsPage=async({params}:IProps)=>{
    const {id,title,thumbnail} = await getProducts(params.id);
     return(
        <div>
        <h1> Product : </h1>
        
            <h2>
                {id }:{title}
            </h2>

   
        </div>
    );
};
export default ProductsPage;