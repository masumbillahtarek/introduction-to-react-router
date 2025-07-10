import { useLoaderData } from "react-router-dom";


const CommentsDetails = () => {
    const comments=useLoaderData()
    const{name,email,body}=comments
    return (
        <div  style={{border:'2px solid yellow',borderRadius:'20px' ,padding:'20px'}}>
             <h2>{name}</h2>
    <h3>{email}</h3>
    <p>{body}</p>
        </div>
    );
};

export default CommentsDetails;