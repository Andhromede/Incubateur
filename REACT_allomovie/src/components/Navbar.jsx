// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
    return (
        <>
            <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                    <div className="collapse navbar-collapse flex items-center" id="navbarSupportedContent1">
                        <a className="text-xl text-white pr-2 font-semibold" href={"/home"}>Allo-Movie</a>
                        
                        {/* Left links */}
                        <ul className="navbar-nav flex pl-0 list-style-none mr-auto">
                            <li className="nav-item p-2">
                                <a className="nav-link text-white" href={"/home"}>Home</a>
                            </li>

                            <li className="nav-item p-2">
                                <a className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0" href={"/home"}>Mes favoris</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

         
    );
}

export default NavBar;