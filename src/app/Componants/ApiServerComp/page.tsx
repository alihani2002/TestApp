import Link from "next/link";

const ApiServerComponant = async () => {
    // fetch API for Server Componants 
     const response = await fetch('https://jsonplaceholder.typicode.com/posts',{next : {revalidate: 120,}});
     const  posts =  await response.json();    
      return (
        <>
        { 
            posts.map(({id , title , body}: {id : string , title : string , body : string})=>{
            return( 
            <>
            <div key={id} >
            <Link  href={`/Posts/${id}`}>
            <div  className="container p-5 my-5 bg-primary text-white">
            <h2>Title is : {title}</h2>
            <hr/>
            <p>Body is : {body}</p>
            </div>
            </Link>
           </div>
            </>
            );
        })
        }
        </> 
        
      )
    }
    
    export default ApiServerComponant ;