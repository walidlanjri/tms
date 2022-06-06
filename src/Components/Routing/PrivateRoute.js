import { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useState } from 'react';


//check user 
const PrivateRoute = ({comp: Component,...rest}) => {
    const [isLoading,setIsloading]=useState(true);
    const [userExist,setIsUser]=useState(false);
    const [user,setUser] = useState(null);
    const [fetched, setFetched] = useState(false)

    useEffect(()=>{
        fetch("HTTP://localhost:3001/user",{
            headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`}
        })
        .then((res)=>{
            if(!res.ok){
                throw Error("failed to fetch");
            }
            return res.json();
        })
        .then((data)=>{
            setFetched(true)
            if(data.user){
                setUser(data.user);
                setIsUser(true);;
            }
            else{
                setIsUser(false);
                setUser(null);
            }
        });
    },[]);

    useEffect(()=>{
        if(fetched)
            setIsloading(false);
    },[userExist,user,fetched]);
    
    //if user exist
    return(
        !isLoading && (userExist ? <Route {...rest} render={props =>(<Component user={user} {...props} />)}/> :<Redirect to='/connecter'/>))
}

export default PrivateRoute;