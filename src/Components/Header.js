import { Link,  useNavigate } from 'react-router-dom'
import Aside from './Aside';
import { toast } from 'react-toastify';



const Header = () => {

    const navigate = useNavigate()
    //handle sidebar open and close
    const handleClick = () => {
        const element = document.getElementsByTagName('body');
        element[0].classList.toggle("toggle-sidebar");
    };

    //signOut admin
    const signOut = () => {
        localStorage.removeItem('name')
        toast.info('Sign Out Successfully', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 800,
        });
        setTimeout(() => {
            navigate('/')
        }, 1400);

    }

    
    let styles = {
        marginRight: '10px',
        textDecoration: 'none'
    };


    const name = localStorage.getItem('name')
    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">

                <div className="d-flex align-items-center justify-content-between col-1">
                    <a href="/dashboard" className="logo d-flex align-items-center" style={{ textDecoration: "none" }}>
                        <span className="d-none d-sm-block"><h3>FieWin</h3></span>
                    </a>
                    <Link >
                        <h3>
                            <i className="bi bi-list toggle-sidebar-btn" onClick={() => { handleClick() }}></i>

                        </h3>
                    </Link>
                </div>



                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center " style={styles}>






                        <li className="nav-item dropdown pe-3">

                            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="/profile   " data-bs-toggle="dropdown">
                                <span className="d-none d-md-block dropdown-toggle ps-2"><h>{name}</h></span>
                            </a>
                            {/* <!-- End Profile Image Icon --> */}

                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6>{name}</h6>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" to="/profile">
                                        <i className="bi bi-person"></i>
                                        <span>My Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" to='/changepassword'>
                                        <i className="bi bi-gear"></i>
                                        <span>Change Password</span>
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>


                            </ul>
                        </li>
                        <li className="nav-item" style={{ listStyleType: "none" }}>
                            <Link className="d-flex align-items-center" onClick={() => { signOut() }}>


                                <i className="bi bi-box-arrow-right">

                                </i>&nbsp;
                                <span> Sign Out</span>



                            </Link>
                        </li>

                    </ul>
                </nav>

            </header>
            <Aside />
        </>
    )
}

export default Header
