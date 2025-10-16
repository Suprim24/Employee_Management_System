import { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const App = () => {
  useEffect(() => {
    
    getLocalStorage()
  }, ); 

  const [user, setUser] = useState(null)
  
  const handelLogin = (email,password)=>{
    if(email =="admin@me.com" && password == '123') 
    {
      setUser("admin")
    }else if(email=='user@me.com' && password=='123'){
      setUser("employee")
    }
    else{
      alert("error")
    }
  }
  
  

  return (
    <div>
      {!user ? <Login handelLogin={handelLogin} /> : ''}
     {user == 'admin'? <AdminDashboard/>:<EmployeeDashboard/>}
    </div>
  );
};

export default App;
