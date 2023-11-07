import "./style.css"
function Button({text, loadMorePosts, disable}) {
    return ( 
        <button 
            disabled={disable}
            className={disable? "btn disable": "btn"} 
            onClick={loadMorePosts}
        >   {text}
        </button>
     );
}

export default Button;