import Link from 'next/link';
import React from 'react'
import './page.scss';
import Navbar from '../Componants/Navbar/page';
import ApiServerComponant from '../Componants/ApiServerComp/page';


 const PageHome = async () => {
  return (
    <div className='Container-fluid'>
      <h1>PageHome</h1> 
      <br/>
      <Link href={"/Articals"}><button type="button" className="btn btn-primary">Switch to Article Page</button></Link>
      <Navbar/>
        <div style={{margin : 20 , padding : 20 }}>
          <hr/>
        <h2> New APi  </h2>
          {/* fetching Api from server componant */}
          <ApiServerComponant/>
        </div>
      </div>
  )
}

export default PageHome ;