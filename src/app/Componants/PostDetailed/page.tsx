import React from 'react'

  const PostDetails = async({params}: {params : {id : string} }) => {

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`,{next : {revalidate: 120 ,}});
  const  post =  await response.json();

  return (
    <div>
        <div>
          <h4>Title IS : {post.title}</h4>
          <h5>Body is : {post.body}</h5>
        </div>
      </div>
  )
}
export default PostDetails ; 