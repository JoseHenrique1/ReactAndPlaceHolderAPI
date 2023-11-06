async function loadposts() {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postjson = await posts.json();
    const photosjson = await photos.json();

    const postandphotos = postjson.map((post, index)=>{
      return {...post, cover: photosjson[index].url};
    });

    return postandphotos;
}

export default loadposts;