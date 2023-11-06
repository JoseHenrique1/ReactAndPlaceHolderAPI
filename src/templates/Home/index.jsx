import { useEffect, useState } from 'react';
import Posts from "./../../components/Posts/index"
import './style.css';
import loadposts from './../../utils/load-post';

function Home() {
  const [allPosts, setAllPosts] = useState([]);

  const loadPosts = async ()=>{
    const postandphotos = await loadposts();
    setAllPosts(postandphotos);
  }
  //tive que fazer isso porque a funcao load post é async
  useEffect(()=>{loadPosts()}, []);

  return (
    <section className='container'>
      <Posts allPosts={allPosts} />
    </section>
  );
}

export default Home;
