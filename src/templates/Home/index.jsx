import { useEffect, useState } from 'react';
import Posts from "./../../components/Posts/index"
import Button from '../../components/Button';
import './style.css';
import loadposts from './../../utils/load-post';
import TextInput from '../../components/TextInput';

function Home() {
  const [posts, setPosts] = useState([])
  const [allPosts, setAllPosts] = useState([]);
  const [page,setPage] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [search, setSearch] = useState('');

  const loadPosts = async ()=>{
    const postandphotos = await loadposts();
    setPosts(postandphotos.slice( page, postsPerPage));
    setAllPosts(postandphotos);
  }
  //tive que fazer isso porque a funcao load post é async
  useEffect(()=>{loadPosts()}, []);

  useEffect( function loadMorePosts() {
    setPosts((p)=>{
      let postss = p;
      postss.push(...allPosts.slice(page, page + postsPerPage))
      return posts;  
    })
  }, [page, postsPerPage, allPosts])

  const disable = (page) >= allPosts.length? true: false;

  const filteredPosts = search? allPosts.filter(post=>post.title.toLowerCase().includes(search.toLocaleLowerCase())) : posts;

  return (
    <section className='container'>
      { search && <h1>Search {search}</h1> }
      <div className='container-center'>
        <TextInput search={search} setSearch={setSearch} />
      </div>
      
      
      { filteredPosts.length > 0?
        <Posts allPosts={filteredPosts} />: <p>Não encontrado</p>
      }
      <div className='container-center'>
        {!search && <Button text={"More posts"} loadMorePosts={()=>{setPage(page+postsPerPage)}} disable={disable} />}
      </div>
    </section>
  );
}

export default Home;
