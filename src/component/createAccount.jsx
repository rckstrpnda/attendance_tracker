import { Link,Outlet } from "react-router-dom";

const CreateAccount = () => {
  return (
    <div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Link to={'/login'}><button>Login</button></Link>
      <a href="/signup"><button>Sign up</button></a>
      <a href="/scanner"><button>Scan for attendance</button></a>
    </div>
    <Outlet/>
    </div>
    
  );

}
export default CreateAccount;