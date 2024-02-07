import Link from 'next/link';
import React from 'react'
import ApiClientComp from '../Componants/ApiClientComp/page';
import './page.scss';



 const ArticalsPage = async() => {
  // fetch single API in Server Componants 
 const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
 const  res =  await response.json();

  return (
    <div className='Container-fluid'>
        <h3>ArticalsPage</h3>
        <br/>
        <div key={res.id}> <h2>ResultOf single Api is : {res.title}</h2></div>
        <br/>
        {/* Fetch api from client componant don't do this this just for testing */}
        <h5><ApiClientComp/></h5>
        <br/>
        <Link href={"/Posts"}>  <button type="button" className="btn btn-primary" >Take me to posts</button> </Link>

    </div>
  )
}

export default ArticalsPage ;