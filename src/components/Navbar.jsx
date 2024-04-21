
import { Link } from "react-router-dom"


function Navbar() {
        return (
                <>
                        <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 .bg-secondary-subtle rj-navbar">
                                <div className="container-fluid">
                                        <Link className="navbar-brand fs-3  l-6 fx-bold" to="/">
                                                NewsHUB
                                        </Link>
                                        <button
                                                className="navbar-toggler"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#navbarNavAltMarkup"
                                                aria-controls="navbarNavAltMarkup"
                                                aria-expanded="false"
                                                aria-label="Toggle navigation"
                                        >
                                                <span className="navbar-toggler-icon" />
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                                <div className="navbar-nav">
                                                        <Link className="nav-link r-5 fs-5" to="/technology">
                                                                Technology
                                                        </Link>
                                                        <Link className="nav-link r-5 fs-5" to="/business">
                                                                Business
                                                        </Link>
                                                        <Link className="nav-link r-5 fs-5" to="/health">
                                                                Health
                                                        </Link>
                                                        <Link className="nav-link r-5 fs-5" to="/sport">
                                                                Sports
                                                        </Link>
                                                       
                                                </div>
                                        </div>
                                </div>
                        </nav>

                </>
        )
}

export default Navbar