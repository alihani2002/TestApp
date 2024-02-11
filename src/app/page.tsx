import Link from "next/link";

import NavBar from "./Componants/navbar";


export default function Home() {
  return (
   <>
    <div className="container p-5 my-5 bg-primary text-white">
      <h1> Hello Safary </h1>
    </div>
    <br/>
    
    <div className="container p-5 my-5 bg-secondary text-white">
      <Link  href={`/Cards`}>
      <h1> click here  </h1>
      </Link>
    </div>
    
<NavBar/>


      

   </>
  );
}
