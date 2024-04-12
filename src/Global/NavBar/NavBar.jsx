import logo from '../../assets/logo.png'

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Travel</a></li>
                        <li><a>Pages</a></li>
                        <li><a>Services</a></li>
                        <li><a>Shop</a></li>
                        <li><a>Blogs</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><img className='h-10 w-25' src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                        <li><a>Travel</a></li>
                        <li><a>Pages</a></li>
                        <li><a>Services</a></li>
                        <li><a>Shop</a></li>
                        <li><a>Blogs</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                <input type="text" placeholder="Type here" className="input input-bordered input-success mr-2 max-w-xs" />
                    <a className="btn">Search</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;