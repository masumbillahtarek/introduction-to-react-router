import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user=useLoaderData()
    console.log(user)
   const{name,website}=user
    return (
        <div style={{border:'2px solid yellow',borderRadius:'20px' ,padding:'20px'}}>
            <h2>Details About User :{name} </h2>
            <h3>Website : {website}</h3>
        </div>
    );
};

export default UserDetails;