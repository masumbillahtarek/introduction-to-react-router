import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    const users=useLoaderData()
    console.log(users)
    return (
        <div>
            <h1>Users : {users.length}</h1>
          <div style={{display:'grid',gap:'20px',gridTemplateColumns:'repeat(3,1fr)'}}>
              {
                users.map(user=><User user={user}></User>)
            }
          </div>
        </div>
    );
};

const User=({user})=>{
    const{id,name,username,email}=user
    return(
<div style={{border:'2px solid yellow',borderRadius:'20px' ,padding:'20px'}}>
    <h2>Name : {name}</h2>
<h4>Username : {username}</h4>
<h5>Email : {email}</h5>
<Link to={`/users/${id}`}>Show Details</Link>
</div>
    )
}
export default Users;