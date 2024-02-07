import PostDetails from '@/app/Componants/PostDetailed/page';
import React, { Suspense } from 'react'

  const PageId = async({params}: {params : {id : string} }) => {
    const LoadingTsx =(
    <div>
    <h4>Loading now ...</h4>  
    </div>
    );


  return (
    <div>
        <h1>Page Details</h1>
        
        <Suspense fallback={LoadingTsx}>
          <PostDetails params={params}/>
        </Suspense>
        
        </div>
  )
}
export default PageId ; 