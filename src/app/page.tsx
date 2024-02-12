import Link from "next/link";
import { Navbar } from "react-bootstrap";
import ProductsPage from "./Product/page";




export default function Home() {
  return (
   <>
    <div className="container p-5 my-5 bg-primary text-white">
      <h1> Hello Good  </h1>
    </div>
    <br/>
    <br/>
    
    
    <div className="container p-5 my-5 bg-secondary text-white">
      <Link  href={`/Cards`}>
      <h1> click here  </h1>
      </Link>
    </div>
    
    <div className="container p-5 my-5 bg-secondary text-white">
      <h1> Products ApI</h1>
      <ProductsPage/>
  </div>

     <>
     <Navbar/>
     </>
   </>
  );
}
