import { Link } from 'react-router-dom';
import img from '../../assets/image/img-10.jpg'

const NavBar = () => {
const navItems = <>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/blog">Blog</Link></li>
  </>

  return (
<div className="navbar bg-sky-200 h-28">
  <div className="navbar-start">
    <img className='w-20' src={img} alt="" />
    <h2 className="text-purple-400 text-5xl font-semibold">Cars Toy</h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Get started</a>
  </div>
</div>
  );
};

export default NavBar;
