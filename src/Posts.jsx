import { Link, useLoaderData, useNavigate } from "react-router-dom";


const Posts = () => {
      const posts=useLoaderData()
    return (
        <div style={{display:'grid',gap:'20px',gridTemplateColumns:'repeat(3,1fr)'}}>
            {
                posts.map(post=><Post post={post}></Post>)
            }
        </div>
    );
};
 const Post=({post})=>{
    const{id,userId,title,body}=post
      let navigate = useNavigate();
    const showDetails=()=>{
navigate(`/posts/${id}`)
    }
    return(
        <div style={{border:'2px solid yellow',borderRadius:'20px' ,padding:'20px'}}>
<h2>{userId}</h2>
<h3>{title}</h3>
<p>{body}</p>
<Link to={`/posts/${id}`}>Show Details</Link>
<Link to={`/posts/${id}`}><button>Show Details</button></Link>
<button onClick={showDetails}>Click To See Details</button>
        </div>
    )
 }
export default Posts;