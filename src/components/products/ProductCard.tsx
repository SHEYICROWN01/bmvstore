import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import { useShop } from '../../context/ShopContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { navigateToProduct, addToCart, toggleWishlist, isInWishlist } = useShop();

  const isLiked = isInWishlist(product.id);

  const formatNaira = (amount: number) => {
    return '₦' + amount.toLocaleString('en-NG');
  };

  const handleCardClick = () => {
    navigateToProduct(product.id);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white rounded-xl border border-[#E1E7EF] hover:border-[#082B5B]/30 hover:shadow-xl transition-all duration-200 flex flex-col justify-between p-3.5 sm:p-4 cursor-pointer relative"
    >
      {/* Top Badges & Wishlist Button */}
      <div className="flex items-center justify-between w-full mb-2 z-10">
        <div>
          {product.badge && (
            <span className="inline-block px-2 py-0.5 bg-[#F20D25] text-white text-[10px] font-bold rounded-sm uppercase tracking-wider">
              {product.badge}
            </span>
          )}
        </div>

        <button
          onClick={handleToggleWishlist}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
            isLiked
              ? 'bg-red-50 text-[#F20D25]'
              : 'text-slate-400 hover:text-[#F20D25] hover:bg-slate-100'
          }`}
          aria-label="Wishlist"
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-current text-[#F20D25]' : ''}`} />
        </button>
      </div>

      {/* Product Image */}
      <div className="w-full aspect-square bg-[#F8FAFC] rounded-lg p-3 mb-3 flex items-center justify-center overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-106 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Brand */}
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            {product.brand}
          </span>

          {/* Product Name (capped at 2 lines for uniform card heights) */}
          <h3 className="text-xs sm:text-[13.5px] font-bold text-[#082B5B] group-hover:text-[#F20D25] transition-colors line-clamp-2 mt-0.5 leading-snug">
            {product.name}
          </h3>

          {/* Ratings */}
          <div className="flex items-center gap-1.5 mt-1.5 text-xs">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-amber-400 text-amber-400'
                      : i < product.rating
                      ? 'fill-amber-400/50 text-amber-400'
                      : 'text-slate-200 fill-slate-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] text-slate-400 font-medium font-mono tabular-nums">
              ({product.reviewCount})
            </span>
          </div>
        </div>

        {/* Price & Add to Cart Action */}
        <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-black text-[#F20D25] font-mono tabular-nums leading-tight">
              {formatNaira(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-[11px] text-slate-400 line-through font-mono tabular-nums">
                {formatNaira(product.originalPrice)}
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#F20D25] hover:bg-[#D6091E] text-white flex items-center justify-center transition-all active:scale-90 shadow-sm cursor-pointer shrink-0"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
