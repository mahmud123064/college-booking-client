import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {

    const { user,logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then(()=> {})
        .catch(error => console.log(error))
    }

    return (
        <div className="navbar bg-base-100 mb-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase">
                        <li><Link>HOME</Link></li>
                        <li><Link>Colleges</Link></li>
                        <li><Link>Admission</Link></li>
                        <li><Link>My College</Link></li>

                    </ul>
                </div>
                <Link className="normal-case text-xl text-orange-500 font-bold">MUZ-IT</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link>HOME</Link></li>
                    <li><Link>Colleges</Link></li>
                    <li><Link>Admission</Link></li>
                    <li><Link>My College</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                
                {
                    user ? <>
                    <p className="text-green-300">{user.displayName}</p>
                    <button className="btn btn-secondary ms-5" onClick={handleLogOut}>Log Out</button>
                    </> : <>
                    <Link to='/login' className="btn btn-primary">Login</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;