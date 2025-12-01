import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Error404.css';
import { Link } from 'react-router-dom';
function Error404() {
  return (
    <section className="error-404 d-flex flex-column justify-content-center align-items-center text-center">
      <div className="error-image mb-4">
      </div>
      <h1 className="display-1 fw-bold mb-3">404</h1>
      <h2 className="mb-3">Oops! Page Not Found</h2>
      <p className="mb-4">The page you're looking for does not exist or has been moved.</p>
      <Link to="/" className="btn btn-primary btn-lg error-btn">
        <i className="fa-solid fa-house me-2"></i>Go Back Home
      </Link>
    </section>
  );
}
export default Error404;
