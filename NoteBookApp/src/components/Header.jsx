import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  const navigate = useNavigate();
  let location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate('/signup');
  };

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("token"));
  }, [location.pathname]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">INOTEBook</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
            </li>
          </ul>
          {isAuthenticated ? (
            <button onClick={handleLogout} className="btn btn-outline-dark">LogOut</button>
          ) : (
            <form className="d-flex" role="search">
              <Link className="btn btn-outline-dark mx-1" to="/login">LogIn</Link>
              <Link className="btn btn-outline-dark mx-1" to="/signup">SignUp</Link>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
