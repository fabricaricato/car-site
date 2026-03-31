import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-icon">🏎️</span>
              <span className="logo-text">
                Auto<span className="logo-highlight">Partes</span> Pro
              </span>
            </Link>
            <p className="footer-description">
              Tu proveedor de confianza en repuestos vehiculares, componentes de motor y agregados de alta calidad.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Navegación</h4>
            <ul className="footer-list">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/catalogo">Catálogo</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Categorías</h4>
            <ul className="footer-list">
              <li><Link to="/catalogo?cat=frenos">Frenos</Link></li>
              <li><Link to="/catalogo?cat=motor">Motor</Link></li>
              <li><Link to="/catalogo?cat=suspension">Suspensión</Link></li>
              <li><Link to="/catalogo?cat=electrico">Eléctrico</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contacto</h4>
            <ul className="footer-list footer-contact">
              <li>📍 Buenos Aires, Argentina</li>
              <li>📞 +54 11 1234-5678</li>
              <li>✉️ info@autopartespro.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AutoPartes Pro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
