import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const Home = () => {
    const navigation=useNavigation()
    const location=useLocation()
    console.log(location)
    return (
        <div>
            <Header></Header>
            {
                navigation.state==="loading"?
                <p><span>Just wait baby I am </span> Loading...</p>:
                <Outlet></Outlet>
            }
            <h2>Hello Brother</h2>
           
            <Footer></Footer>
        </div>
    );
};

export default Home;