import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    let navigate = useNavigate();
   // const params=useParams()
      const {postId}=useParams()
     const post=useLoaderData()
    // console.log(params)
    console.log(postId)
    // console.log(post)
    const{title}=post
    const handleGoBack=()=>{
navigate(-1)
    }
    return (
        <div style={{border:'2px solid yellow',borderRadius:'20px' ,padding:'20px'}}>
            <h3>Post Details : {title}</h3>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;