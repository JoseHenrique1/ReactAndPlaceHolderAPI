import "./style.css"
function TextInput( {search, setSearch}) {
    return ( 
        <input 
        className="search"
        type="search"
        onChange={(e)=>{setSearch(e.target.value)}}
        value={search} />
     );
}

export default TextInput;