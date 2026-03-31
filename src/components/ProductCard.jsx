import { Link } from 'react-router-dom';
import { formatPrice } from '../data/products';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <Link to={`/producto/${product.id}`} className="product-card" id={`product-${product.id}`}>
      <div className="product-card-image">
        <img src={product.image} alt={product.name} loading="lazy" />
        <div className="product-card-overlay">
          <span className="product-card-view">Ver detalle →</span>
        </div>
      </div>
      <div className="product-card-body">
        <span className="product-card-category">{product.category}</span>
        <h3 className="product-card-name">{product.name}</h3>
        <div className="product-card-footer">
          <span className="product-card-brand">{product.brand}</span>
          <span className="product-card-price">{formatPrice(product.price)}</span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
