import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [allPosts, setAllPosts] = useState([]);

  const loadPosts = async ()=>{
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postjson = await posts.json();
    const photosjson = await photos.json();

    const postandphotos = postjson.map((post, index)=>{
      return {...post, cover: photosjson[index].url};
    });

    setAllPosts(postandphotos);
  }

  useEffect(loadPosts, []);



  return (
    <section className='container'>
      <div className='posts'>
          {allPosts.map( (item)=>{
            return (
              <div className='post'>
                <img src={item.cover} alt={item.title}/>
                <div className='post-content'>
                  <h1>{item.title}</h1>
                  <p>{item.body}</p>
                </div>
              </div>
            )
          })}
      </div>
    </section>
  );
}

export default App;
