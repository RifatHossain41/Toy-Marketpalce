import { Link } from 'react-router-dom';
import img2 from '../../assets/image/img-11.jpg'
import img from '../../assets/image/img-10.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const NavBar = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(error => console.log(error))
  }

const navItems = <>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/blog">Blog</Link></li>
  <li><Link to="/alltoys">All Toys</Link> </li>
  {
      user?.email ? <>
           <li><Link to="/mytoys">My Toys</Link></li>  
           <li><Link to="/addtoys">Add Toys</Link></li>  
           <button className='btn btn-warning' onClick={handleLogOut}>Log Out</button>   
      </>
      :<Link to="/login">Login</Link>
  }
  </>


  return (
<div className="navbar bg-sky-200 h-28">
  <div className="navbar-start">
    <img className='w-20 mr-4' src={img} alt="" />
    <h2 className="text-purple-400 text-5xl font-semibold">Cars Toy</h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
      {navItems}
      
    </ul>
    
  </div>
  <div className="navbar-end">
 { 
  user?.email ?  <>
  <img className='rounded-lg w-20 mr-4' src={img2} alt="" />
 
  </>
   :<button className='btn btn-secondary'><Link to="/login">Login</Link></button>
 } 
 
 { user?.email && (<img src={user.photoURL} alt="" />)}
  </div>
</div>
  );
};

export default NavBar;
