import Link from "next/link";
interface IProps{}
const ProductsPage=({}:IProps)=>{
    return(
        <div>
             {Array.from({length:10},(_,idx)=>(
            <h2 key={idx}>
                <Link href={`/Products/${idx+1}`}> Product Id -{idx+1}</Link>
                </h2>
             ))}
        </div>
    )
}
export default ProductsPage;    