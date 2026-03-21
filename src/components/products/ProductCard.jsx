import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import { ShoppingBag, Search } from 'lucide-react';

const printerImg = "/Ink Kart LLClogo.png"; // Fallback

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleDetails = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/product/${product.slug || product._id}`);
  };

  const handleBuyNow = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product.slug || product._id, 1));
    navigate('/cart?redirect=shipping');
  };

  const imageUrl = product.image 
    ? (product.image.startsWith('http') ? product.image : `${import.meta.env.VITE_API_URL.replace('/api', '')}${product.image}`)
    : (product.images && product.images.length > 0 
        ? (product.images[0].startsWith('http') ? product.images[0] : `${import.meta.env.VITE_API_URL.replace('/api', '')}${product.images[0]}`) 
        : printerImg);

  const price = typeof product.price === 'number' ? product.price.toFixed(2) : product.price;

  return (
    <div 
      className="boutique-product-tile group reveal-zoom"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="boutique-container">
        <Link to={`/product/${product.slug || product._id}`} className="boutique-image-frame">
            <img 
            src={imageUrl} 
            alt={product.title || product.name} 
            onError={(e) => { e.target.src = 'https://via.placeholder.com/300?text=HP+Hardware'; }}
            className="boutique-image"
            />
            <div className="boutique-overlay-actions">
                <button onClick={handleDetails} className="icon-btn-luxury">
                    <Search size={18} />
                </button>
            </div>
            {product.countInStock === 0 && <span className="boutique-stock-tag">Unavailable</span>}
        </Link>
        
        <div className="boutique-details">
            <span className="boutique-cat">{product.category?.name || product.category || 'Printing Systems'}</span>
            <Link to={`/product/${product.slug || product._id}`} className="boutique-title">
            {product.title || product.name}
            </Link>
            <div className="boutique-price-box">
                <span className="boutique-price-tag">${price}</span>
            </div>
            
            <button className="boutique-buy-btn" onClick={handleBuyNow}>
                <ShoppingBag size={14} />
                <span>Acquire Now</span>
            </button>
        </div>
      </div>

      <style>{`
        .boutique-product-tile {
           background: #ffffff;
           position: relative;
           transition: all 0.4s;
           border: 1px solid #f2f2f2;
           margin: 10px; /* Reduced card size visually by adding margin in the grid */
        }

        .boutique-container {
           display: flex;
           flex-direction: column;
           height: 100%;
           padding: 20px; /* Internal cushion */
        }

        .boutique-image-frame {
           position: relative;
           width: 100%;
           padding-top: 100%;
           background: #fbfbfb;
           overflow: hidden;
           display: block;
        }

        .boutique-image {
           position: absolute;
           top: 0; left: 0; width: 100%; height: 100%;
           object-fit: contain;
           padding: 45px; /* Significant padding to reduce the visual size of the product */
           transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .boutique-product-tile:hover .boutique-image {
           transform: scale(1.1) translateY(-5px);
        }

        .boutique-overlay-actions {
           position: absolute;
           inset: 0;
           display: flex;
           align-items: center; justify-content: center;
           background: rgba(255,255,255,0.1);
           backdrop-filter: blur(2px);
           opacity: 0;
           transition: all 0.3s;
        }

        .boutique-product-tile:hover .boutique-overlay-actions {
           opacity: 1;
        }

        .icon-btn-luxury {
           width: 44px; height: 44px;
           background: #111;
           color: #fff;
           border-radius: 50%;
           border: none; cursor: pointer;
           display: flex; align-items: center; justify-content: center;
           transition: all 0.3s;
        }

        .icon-btn-luxury:hover {
           background: #B19777;
           transform: scale(1.1);
        }

        .boutique-stock-tag {
           position: absolute;
           top: 10px; right: 10px;
           background: #111;
           color: #fff;
           font-family: 'Montserrat';
           font-size: 7px;
           font-weight: 900;
           padding: 3px 8px;
           text-transform: uppercase;
           letter-spacing: 2px;
        }

        .boutique-details {
           padding: 25px 0 10px 0;
           text-align: center;
           flex: 1;
           display: flex;
           flex-direction: column;
           align-items: center;
        }

        .boutique-cat {
           font-family: 'Montserrat';
           font-size: 8px;
           font-weight: 900;
           text-transform: uppercase;
           letter-spacing: 3px;
           color: #ccc;
           margin-bottom: 10px;
        }

        .boutique-title {
           font-family: 'Montserrat';
           font-size: 13px;
           font-weight: 950;
           color: #111;
           margin-bottom: 15px;
           line-height: 1.4;
           text-transform: uppercase;
           letter-spacing: -0.5px;
           text-decoration: none;
           display: -webkit-box;
           -webkit-line-clamp: 2;
           -webkit-box-orient: vertical;
           overflow: hidden;
           height: 36px;
        }

        .boutique-price-box {
           margin-bottom: 25px;
        }

        .boutique-price-tag {
           font-family: 'Montserrat';
           font-size: 16px;
           font-weight: 950;
           color: #B19777;
           letter-spacing: -1px;
        }

        .boutique-buy-btn {
           width: 100%;
           padding: 14px;
           background: #111;
           color: #fff;
           border: none;
           font-family: 'Montserrat';
           font-weight: 900;
           font-size: 9px;
           text-transform: uppercase;
           letter-spacing: 3px;
           display: flex;
           align-items: center; justify-content: center;
           gap: 10px;
           cursor: pointer;
           transition: all 0.3s;
        }

        .boutique-buy-btn:hover {
           background: #B19777; /* Color Change on Hover */
           color: #fff;
           transform: translateY(-3px);
           box-shadow: 0 10px 20px rgba(177, 151, 119, 0.3);
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
