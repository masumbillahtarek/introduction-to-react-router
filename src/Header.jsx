import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div style={{display:'flex',justifyContent:'space-between',margin:'10px 100px',alignItems:'center'}}>
            <h3 style={{fontSize:'70px',fontWeight:'bolder'}}>MBT Shop </h3>
       <nav style={{display:'flex',gap:'20px',fontSize:'20px',fontWeight:'bold' ,padding:'20px',margin:'20px',border:'2px solid blue',justifyContent:'center',textAlign:'center',}}>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/comments">Comments</NavLink>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
     
        <Link to="/contact">Contact</Link>
       
        {/*
            <Link to="/users">Users</Link>
        <Link to="/posts">Posts</Link>
         <a href="/">Home</a>
            <a href="/about">About </a>
            <a href="/contact">Contact Us</a>
        */}
            
       </nav>
        </div>
    );
};

export default Header;