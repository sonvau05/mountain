import React from 'react';
const Nav = ({Toggle}) => {
    return (
        <nav className="navbar navbar-expand-sm navbar-white bg-transparent px-3">
            <i className="navbar-brand bi bi-justify-left fs-4" onClick={Toggle}></i>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            ><i className='bi bi-justify'></i>
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            You
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Profile</a>
                            <a className="dropdown-item" href="#">Setting</a>
                        </div>
                    </li>
                </ul>
            </div> */}
        </nav>
    );
}

export default Nav;
