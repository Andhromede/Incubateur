import NavLink from './NavLink';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaShoppingBasket } from 'react-icons/fa';

function NavBar() {
    return (
        <>


            <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                    <div className="collapse navbar-collapse flex items-center" id="navbarSupportedContent">
                        <a className="text-xl text-white pr-2 font-semibold" href={"/home"}>My-Shop</a>

                        <ul className="navbar-nav flex pl-0 list-style-none mr-auto">
                            {/* <li className="nav-item p-2">
                                <a className="nav-link text-white" href="#">Dashboard</a>
                            </li> */}

                            <NavLink classe="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0" text="Home" link="/home" />
                            <NavLink classe="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0" text="Produits" link="/home" />
                            <NavLink classe="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0" text="Mon compte" link="/home" />
                        </ul>
                    </div>

                    <div className="flex items-center relative">
                        <a className="text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0 mr-6" href={"/home"}>
                            <FaShoppingBasket className=""/>
                            {/* <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">1</span> */}
                        </a>

                        <a className="text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0 mr-4" href={"/home"} id="account" role="button">
                            <BsFillPersonLinesFill className=""/>
                        </a>

                    </div>
                </div>
            </nav>
        </>


    );
}

export default NavBar;