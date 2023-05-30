import logo from '../KFC-Logo-Red.png';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className="mb-3">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img src={logo} alt='logo'></img>
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="btn btn-delivery" aria-current="page" href="#">Start and order for Delivery</a>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item me-2">
                <a class="btn" aria-current="page" href="#"><i class="bi bi-geo-alt-fill"></i><span className="text-loc">Select Location</span></a>
              </li>
              <li class="nav-item me-2">
                <a class="btn cart-counter" aria-current="page" href="#">0</a>
              </li>
              <li class="nav-item">
                <Link class="btn btn-danger" to="/login">Register / Sign in</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Header;