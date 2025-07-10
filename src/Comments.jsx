import { Link, useLoaderData } from "react-router-dom";


const Comments = () => {
    const allComments=useLoaderData()
  
    console.log(allComments)
    return (
       <div  style={{display:'grid',gap:'20px',gridTemplateColumns:'repeat(3,1fr)'}}>
        {
            allComments.map(allComment=><Comment comment={allComment}></Comment>)
        }
       </div>
    );
};
const Comment=({comment})=>{
      const{id,name,email,body}=comment
    return(
<div style={{border:'2px solid yellow',borderRadius:'20px' ,padding:'20px'}}>
    <h2>{name}</h2>
    <h3>{email}</h3>
    <p>{body}</p>
    <Link to={`/comments/${id}`}>Show Comments Details</Link>
</div>
    )
}
export default Comments;