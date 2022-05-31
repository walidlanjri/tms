import Home from "./Home";
import SideBar from "./SideBar";


const Body = () => {
    return ( 
        <div className="body">
            <SideBar/>
            <div className="content">
                <Home/>
            </div>
            
        </div>
     );
}
 
export default Body;