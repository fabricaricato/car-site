import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import './HomePage.css';

function HomePage() {
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero" id="hero-section">
        <div className="hero-bg-effects">
          <div className="hero-glow hero-glow-1"></div>
          <div className="hero-glow hero-glow-2"></div>
        </div>
        <div className="container hero-content animate-fade-in-up">
          <span className="hero-badge">🔧 Repuestos de calidad garantizada</span>
          <h1 className="hero-title">
            Repuestos y componentes
            <span className="hero-gradient-text"> vehiculares</span>
          </h1>
          <p className="hero-subtitle">
            Encontrá las piezas que necesitás para tu vehículo. Frenos, motor, suspensión, componentes eléctricos y más, con las mejores marcas del mercado.
          </p>
          <div className="hero-actions">
            <Link to="/catalogo" className="btn btn-primary btn-lg" id="hero-cta">
              Ver catálogo
            </Link>
            <Link to="/contacto" className="btn btn-outline btn-lg" id="hero-contact">
              Contactanos
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section" id="categories-section">
        <div className="container">
          <h2 className="section-title">Categorías</h2>
          <p className="section-subtitle">Explorá nuestro catálogo por categoría</p>
          <div className="categories-grid stagger-children">
            {categories.map((cat) => (
              <Link
                to={`/catalogo?cat=${cat.id}`}
                className="category-card"
                key={cat.id}
                id={`category-${cat.id}`}
              >
                <span className="category-icon">{cat.icon}</span>
                <h3 className="category-name">{cat.name}</h3>
                <p className="category-desc">{cat.description}</p>
                <span className="category-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section featured-section" id="featured-section">
        <div className="container">
          <h2 className="section-title">Productos destacados</h2>
          <p className="section-subtitle">Los más buscados por nuestros clientes</p>
          <div className="products-grid stagger-children">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="featured-cta">
            <Link to="/catalogo" className="btn btn-outline btn-lg">
              Ver todo el catálogo →
            </Link>
          </div>
        </div>
      </section>

      {/* Value Banner */}
      <section className="section value-section" id="value-section">
        <div className="container">
          <div className="value-grid stagger-children">
            <div className="value-card">
              <span className="value-icon">🚚</span>
              <h3>Envío a todo el país</h3>
              <p>Despachamos a cualquier punto de Argentina con seguimiento en tiempo real</p>
            </div>
            <div className="value-card">
              <span className="value-icon">✅</span>
              <h3>Garantía de calidad</h3>
              <p>Todos nuestros productos cuentan con garantía del fabricante</p>
            </div>
            <div className="value-card">
              <span className="value-icon">💬</span>
              <h3>Soporte técnico</h3>
              <p>Asesoramiento profesional para ayudarte a elegir el repuesto correcto</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🔒</span>
              <h3>Compra segura</h3>
              <p>Transacciones protegidas y múltiples medios de pago disponibles</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
