import PostCard from "./../PostCard/index"
import "./style.css"
function Posts({allPosts}) {
    return ( 
        <div className='posts'>
          {allPosts.map( (item)=>{
            return (
              <PostCard key={item.id} post={item} />
            )
          })}
        </div>
     );
}

export default Posts;

