import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../components/Context/auth';
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [auth,setAuth]=useAuth();

  
  const navigate = useNavigate();
   // form function

   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        
        email,
        password,
       
      });
      
      if (res && res?.data?.success) {
        alert(res.data && res.data.message);
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token
        })
        localStorage.setItem('auth',JSON.stringify(res.data))
        navigate("/");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };
  return (
    <Layout>
    <div className="form-container register" style={{ minHeight: "90vh" }}>
    <form onSubmit={handleSubmit}>
      <h4 className="title">Login FORM</h4>
     
      <div className="mb-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Enter Your Email "
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Enter Your Password"
          required
        />
      </div>
      
      
     
     
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  </div>
    </Layout>
  )
}

export default Login