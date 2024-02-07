import { randomBytes } from 'crypto';
import React from 'react'

export const metadata = {
    title : "Articals Page" ,
}

 const layoutPage = ({children} : {children : string}) => {
  return (
<div  className="container p-5 my-5 bg-dark text-white">
        <h1>layoutPage</h1>
        <hr/>
        {children}
    </div>
  )
}

export default layoutPage;