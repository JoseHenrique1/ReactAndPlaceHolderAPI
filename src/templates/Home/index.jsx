import { useEffect, useState } from 'react';
import Posts from "./../../components/Posts/index"
import Button from '../../components/Button';
import './style.css';
import loadposts from './../../utils/load-post';

function Home() {
  const [posts, setPosts] = useState([])
  const [allPosts, setAllPosts] = useState([]);
  const [page,setPage] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(40)

  const loadPosts = async ()=>{
    const postandphotos = await loadposts();
    setPosts(postandphotos.slice( page, postsPerPage));
    setAllPosts(postandphotos);
  }
  //tive que fazer isso porque a funcao load post é async
  useEffect(()=>{loadPosts()}, []);

  useEffect( function loadMorePosts() {
    console.log('ae')
    setPosts((p)=>{
      let postss = p;
      postss.push(...allPosts.slice(page, page + postsPerPage))
      return posts;  
    })
  }, [page, postsPerPage])

  let disable = (page) >= allPosts.length? true: false;
  console.log(disable + " " + page)

  return (
    <section className='container'>
      <Posts allPosts={posts} />
      <div className='container-btn'>
        <Button text={"More posts"} loadMorePosts={()=>{setPage(page+postsPerPage)}} disable={disable} />
      </div>
      
    </section>
  );
}

export default Home;
