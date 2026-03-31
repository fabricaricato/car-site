import { useParams, Link } from 'react-router-dom';
import { products, categories, formatPrice } from '../data/products';
import ProductCard from '../components/ProductCard';
import './ProductDetailPage.css';

function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <main className="detail-page">
        <div className="container">
          <div className="detail-not-found">
            <h2>Producto no encontrado</h2>
            <p>El producto que buscás no existe o fue removido.</p>
            <Link to="/catalogo" className="btn btn-primary">
              Volver al catálogo
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const categoryInfo = categories.find((c) => c.id === product.category);
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <main className="detail-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb animate-fade-in" id="breadcrumb">
          <Link to="/">Inicio</Link>
          <span className="breadcrumb-sep">/</span>
          <Link to="/catalogo">Catálogo</Link>
          <span className="breadcrumb-sep">/</span>
          <Link to={`/catalogo?cat=${product.category}`}>{categoryInfo?.name}</Link>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">{product.name}</span>
        </nav>

        {/* Product Detail */}
        <div className="detail-grid animate-fade-in-up">
          <div className="detail-image-wrapper">
            <img
              src={product.image}
              alt={product.name}
              className="detail-image"
              id="product-image"
            />
          </div>

          <div className="detail-info">
            <span className="detail-category">
              {categoryInfo?.icon} {categoryInfo?.name}
            </span>
            <h1 className="detail-name" id="product-name">{product.name}</h1>
            <span className="detail-brand">Marca: <strong>{product.brand}</strong></span>

            <div className="detail-price-box">
              <span className="detail-price" id="product-price">{formatPrice(product.price)}</span>
              <span className="detail-stock">✅ En stock</span>
            </div>

            <p className="detail-description">{product.description}</p>

            <div className="detail-actions">
              <button className="btn btn-primary btn-lg detail-cart-btn" id="add-to-cart">
                🛒 Agregar al carrito
              </button>
              <Link to="/contacto" className="btn btn-outline btn-lg">
                Consultar
              </Link>
            </div>

            <div className="detail-features">
              <div className="feature-item">
                <span>🚚</span> Envío a todo el país
              </div>
              <div className="feature-item">
                <span>🔄</span> Devolución en 30 días
              </div>
              <div className="feature-item">
                <span>🛡️</span> Garantía del fabricante
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="related-section section">
            <h2 className="section-title">Productos relacionados</h2>
            <p className="section-subtitle">Otros productos en {categoryInfo?.name}</p>
            <div className="products-grid stagger-children">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default ProductDetailPage;
