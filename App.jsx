import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Home from "./Home";
import Tasks from "./Tasks";
import User from "./User";
import LoginForm from "./LoginForm";



import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  const mainuser ={
    name:"mainuser",
    password:"password123"
  }
  const history = useHistory();
  const [user, setUser] = useState({name:"",password:""});
  const [error, setError] = useState("")

  const Login = details => {
    if(details.name == mainuser.name && details.password == mainuser.password){
      setUser({
        name:details.name,
        password:details.password
      })
    }else{
      setError("Details do not match!")
    }
    
  }
  const Logout = () => {
    localStorage.clear();
    history.push('/LoginForm')
  }
  return (
    <>
      
      <div>
        {(user.name !="")?(
          <Navbar />
          
        ):<LoginForm Login={Login} error={error}/>}
      </div>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Tasks" component={Tasks} />
        <Route exact path="/User" component={User} />
        <Route exact path="/LoginForm" component={Logout} />
        <Redirect to="/" />
      </Switch>
      
    </>
  );
};

export default App;