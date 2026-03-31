import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import './CatalogPage.css';

function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');

  const activeCategory = searchParams.get('cat') || 'todos';

  const filteredProducts = useMemo(() => {
    let result = products;

    if (activeCategory !== 'todos') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.brand.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term)
      );
    }

    return result;
  }, [activeCategory, searchTerm]);

  const handleCategoryChange = (catId) => {
    if (catId === 'todos') {
      searchParams.delete('cat');
    } else {
      searchParams.set('cat', catId);
    }
    setSearchParams(searchParams);
  };

  return (
    <main className="catalog-page">
      <div className="container">
        <div className="catalog-header animate-fade-in-up">
          <h1 className="catalog-title">Catálogo de productos</h1>
          <p className="catalog-subtitle">
            Explorá nuestra selección completa de repuestos y componentes vehiculares
          </p>
        </div>

        <div className="catalog-layout">
          {/* Sidebar */}
          <aside className="catalog-sidebar" id="catalog-filters">
            <div className="sidebar-section">
              <h3 className="sidebar-title">Buscar</h3>
              <div className="search-box">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Buscar repuestos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                  id="search-input"
                />
              </div>
            </div>

            <div className="sidebar-section">
              <h3 className="sidebar-title">Categorías</h3>
              <ul className="filter-list">
                <li>
                  <button
                    className={`filter-btn ${activeCategory === 'todos' ? 'active' : ''}`}
                    onClick={() => handleCategoryChange('todos')}
                    id="filter-todos"
                  >
                    <span>Todos</span>
                    <span className="filter-count">{products.length}</span>
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                      onClick={() => handleCategoryChange(cat.id)}
                      id={`filter-${cat.id}`}
                    >
                      <span>
                        {cat.icon} {cat.name}
                      </span>
                      <span className="filter-count">
                        {products.filter((p) => p.category === cat.id).length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Products Grid */}
          <section className="catalog-content">
            <div className="catalog-info">
              <span className="results-count">
                {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''}
              </span>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="products-grid stagger-children">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="catalog-empty" id="catalog-empty">
                <span className="empty-icon">🔍</span>
                <h3>No se encontraron productos</h3>
                <p>Intentá con otro término de búsqueda o cambiá de categoría</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

export default CatalogPage;
