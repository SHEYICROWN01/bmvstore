import React, { useState } from 'react';
import {
  Star,
  ChevronRight,
  ChevronLeft,
  Truck,
  ShieldCheck,
  Headphones,
  Wrench,
  Zap,
  Layers,
  Home,
  Check,
  ShoppingCart,
  ArrowRight,
  Share2,
  Heart,
  Package,
  TrendingUp,
  Smartphone,
  Shield,
  BatteryCharging
} from 'lucide-react';
import { Product } from '../../types';
import { useShop } from '../../context/ShopContext';
import { SafeImage } from '../common/SafeImage';
import { products } from '../../data/products';
import { ProductCard } from './ProductCard';

interface ProductDetailPageProps {
  product: Product;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product }) => {
  const {
    setCurrentPage,
    navigateToCategory,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setCartDrawerOpen,
    setCheckoutModalOpen
  } = useShop();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [includeInstallation, setIncludeInstallation] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'specs' | 'box' | 'reviews' | 'shipping'>('details');

  const isLiked = isInWishlist(product.id);

  const formatNaira = (amount: number) => {
    return '₦' + amount.toLocaleString('en-NG');
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, includeInstallation);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, includeInstallation);
    setCheckoutModalOpen(true);
  };

  // 5 Related products excluding current product
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 5);

  const discountAmount = product.originalPrice ? product.originalPrice - product.price : null;

  return (
    <div className="bg-[#FAFBFD] min-h-screen py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation (Reference Image 2) */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium overflow-x-auto whitespace-nowrap pb-1">
          <button
            onClick={() => setCurrentPage('home')}
            className="hover:text-[#082B5B] transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <button
            onClick={() => setCurrentPage('shop')}
            className="hover:text-[#082B5B] transition-colors cursor-pointer"
          >
            Shop
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <button
            onClick={() => navigateToCategory(product.category)}
            className="hover:text-[#082B5B] transition-colors cursor-pointer"
          >
            {product.categoryLabel}
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#082B5B] font-bold truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Main Product Showcase Box (2-Column Desktop Grid) */}
        <div className="bg-white rounded-xl sm:rounded-2xl border border-[#E1E7EF] p-4 sm:p-6 lg:p-8 shadow-sm mb-8 sm:mb-10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
            
            {/* Left Column: 4-Thumbnail Gallery + Main Image (Reference Image 2) */}
            <div className="lg:col-span-6 flex flex-col-reverse sm:flex-row gap-3 sm:gap-4">
              
              {/* Vertical Thumbnails on Desktop, Horizontal Scroll on Mobile */}
              <div className="flex sm:flex-col gap-2.5 sm:gap-3 justify-start sm:w-20 lg:w-22 shrink-0 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl p-1.5 bg-[#F8FAFC] border-2 transition-all cursor-pointer shrink-0 overflow-hidden ${
                      activeImageIndex === index
                        ? 'border-[#F20D25] ring-2 ring-red-100 shadow-sm'
                        : 'border-[#E2E8F0] hover:border-slate-400'
                    }`}
                  >
                    <SafeImage
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      productCategory={product.category}
                      brandText={product.brand}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>

              {/* Main Display Image */}
              <div className="flex-1 aspect-square sm:aspect-auto sm:h-[420px] lg:h-[480px] bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] relative overflow-hidden flex items-center justify-center p-4 sm:p-6 group">
                
                {/* Badges on Top Right */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 flex flex-col items-end gap-1.5 sm:gap-2">
                  {product.badge && (
                    <span className="px-2.5 py-1 bg-[#F20D25] text-white text-[10px] sm:text-[11px] font-black rounded-md uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <Star className="w-3 h-3 fill-white" />
                      <span>{product.badge}</span>
                    </span>
                  )}
                  {product.capacityBadge && (
                    <span className="px-2.5 py-1 bg-[#082B5B] text-white text-[10px] sm:text-[11px] font-black rounded-md uppercase tracking-wider shadow-sm">
                      {product.capacityBadge}
                    </span>
                  )}
                </div>

                {/* Main Product Photo */}
                <SafeImage
                  src={product.images[activeImageIndex]}
                  alt={product.name}
                  productCategory={product.category}
                  brandText={product.brand}
                  className="w-full h-full object-contain transition-all duration-300 group-hover:scale-103"
                />

                {/* Left & Right Navigation Arrows */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-[#082B5B] shadow-md flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-[#082B5B] shadow-md flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

            </div>

            {/* Right Column: Title, Ratings, Pricing & Purchase Controls */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4 sm:space-y-5">
              
              <div className="space-y-2.5 sm:space-y-3">
                {/* Brand */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    {product.brand}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`p-2 rounded-full border transition-colors cursor-pointer ${
                        isLiked
                          ? 'border-red-200 bg-red-50 text-[#F20D25]'
                          : 'border-slate-200 text-slate-500 hover:text-[#F20D25] hover:bg-slate-50'
                      }`}
                      aria-label="Add to wishlist"
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({ title: product.name, url: window.location.href });
                        }
                      }}
                      className="p-2 rounded-full border border-slate-200 text-slate-500 hover:text-[#082B5B] hover:bg-slate-50 transition-colors"
                      aria-label="Share"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Product Title */}
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#082B5B] tracking-tight leading-snug">
                  {product.name}
                </h1>

                {/* Rating & Sold count */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="font-semibold text-slate-700">({product.reviewCount} customer reviews)</span>
                  <span className="text-slate-300">|</span>
                  <span className="font-mono">{product.soldCount || 48} sold</span>
                </div>

                {/* Price Presentation (100% Mobile Responsive with flex-wrap and clean spacing) */}
                <div className="flex flex-wrap items-baseline gap-x-2.5 sm:gap-x-3 gap-y-1.5 pt-1 sm:pt-2">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F20D25] font-mono tabular-nums tracking-tight">
                    {formatNaira(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-base sm:text-lg text-slate-400 line-through font-mono tabular-nums">
                      {formatNaira(product.originalPrice)}
                    </span>
                  )}
                  {discountAmount && (
                    <span className="inline-flex items-center px-2.5 py-0.5 bg-red-50 text-[#F20D25] text-xs font-bold rounded-md whitespace-nowrap border border-red-100">
                      Save {formatNaira(discountAmount)}
                    </span>
                  )}
                </div>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-0.5">
                  {product.shortDescription}
                </p>

                {/* 4 Key Benefit Badges Row (Reference Image 2) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 py-2 sm:py-3">
                  {product.keyBenefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="bg-blue-50/60 border border-blue-100 rounded-xl p-2 sm:p-2.5 flex flex-col items-center text-center"
                    >
                      <div className="w-7 h-7 rounded-full bg-white text-[#082B5B] flex items-center justify-center mb-1 shadow-xs">
                        {idx === 0 ? <Zap className="w-3.5 h-3.5 text-[#F20D25]" /> :
                         idx === 1 ? <Layers className="w-3.5 h-3.5 text-[#082B5B]" /> :
                         idx === 2 ? <Home className="w-3.5 h-3.5 text-[#082B5B]" /> :
                         <ShieldCheck className="w-3.5 h-3.5 text-[#082B5B]" />}
                      </div>
                      <span className="text-xs font-black text-[#082B5B] leading-tight line-clamp-1">{benefit.title}</span>
                      <span className="text-[10px] text-slate-500 leading-tight line-clamp-1">{benefit.subtitle}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Purchase Controls Strip */}
              <div className="space-y-3 pt-1">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                  {/* Quantity Stepper & Add to Cart: inline row on mobile, unwrapped on sm: */}
                  <div className="flex items-center gap-2.5 sm:contents">
                    {/* Quantity Stepper */}
                    <div className="flex items-center border border-slate-300 rounded-xl h-12 bg-white px-2 shrink-0 justify-between w-28 sm:w-32 shadow-xs">
                      <button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="w-8 h-8 rounded-lg hover:bg-slate-100 active:bg-slate-200 flex items-center justify-center text-slate-700 font-bold text-base transition-colors cursor-pointer select-none"
                        aria-label="Decrease quantity"
                      >
                        –
                      </button>
                      <span className="font-mono font-bold text-sm text-[#082B5B] px-1 select-none">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity((q) => q + 1)}
                        className="w-8 h-8 rounded-lg hover:bg-slate-100 active:bg-slate-200 flex items-center justify-center text-slate-700 font-bold text-base transition-colors cursor-pointer select-none"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    {/* Add to Cart Button (Red) */}
                    <button
                      onClick={handleAddToCart}
                      className="flex-1 h-12 px-4 sm:px-6 bg-[#F20D25] hover:bg-[#D6091E] text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-98 cursor-pointer"
                    >
                      <ShoppingCart className="w-4 h-4 shrink-0" />
                      <span className="whitespace-nowrap">Add to Cart</span>
                    </button>
                  </div>

                  {/* Buy Now Button (Deep Navy) */}
                  <button
                    onClick={handleBuyNow}
                    className="w-full sm:flex-1 h-12 px-6 bg-[#082B5B] hover:bg-[#041C3D] text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-98 cursor-pointer"
                  >
                    <span>Buy Now</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>
                </div>

                {/* Trust Information row */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-slate-500 font-medium py-2 border-t border-slate-100">
                  <span className="flex items-center gap-1 sm:gap-1.5 justify-center sm:justify-start text-center sm:text-left">
                    <Truck className="w-3.5 h-3.5 text-[#082B5B] shrink-0" /> <span className="truncate">Free Delivery</span>
                  </span>
                  <span className="flex items-center gap-1 sm:gap-1.5 justify-center sm:justify-start text-center sm:text-left">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#F20D25] shrink-0" /> <span className="truncate">Genuine Goods</span>
                  </span>
                  <span className="flex items-center gap-1 sm:gap-1.5 justify-center sm:justify-start text-center sm:text-left">
                    <Headphones className="w-3.5 h-3.5 text-[#082B5B] shrink-0" /> <span className="truncate">24/7 Support</span>
                  </span>
                </div>

                {/* Installation Service Add-on Box (Reference Image 2) */}
                {product.installationAvailable && (
                  <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
                    <div className="flex items-start sm:items-center gap-2.5 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#082B5B] text-white flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                        <Wrench className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold text-[#082B5B]">
                          Get Installation Service
                        </h4>
                        <p className="text-[10px] sm:text-[11px] text-slate-500 leading-tight mt-0.5">
                          Professional & certified installation (+{formatNaira(product.installationFee || 35000)}).
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setIncludeInstallation(!includeInstallation)}
                      className={`w-full sm:w-auto px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer shrink-0 text-center ${
                        includeInstallation
                          ? 'bg-[#082B5B] text-white'
                          : 'bg-white hover:bg-slate-100 text-[#082B5B] border border-blue-200 shadow-xs'
                      }`}
                    >
                      {includeInstallation ? '✓ Added' : 'Add Installation'}
                    </button>
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>

        {/* Product Information Tabs (Reference Image 2) */}
        <div className="bg-white rounded-xl sm:rounded-2xl border border-[#E1E7EF] p-4 sm:p-6 lg:p-8 shadow-sm mb-8 sm:mb-12 overflow-hidden">
          
          {/* Tab Navigation Buttons (Desktop) */}
          <div className="hidden sm:flex items-center gap-2 border-b border-slate-200 overflow-x-auto pb-0.5 mb-8">
            <button
              onClick={() => setActiveTab('details')}
              className={`pb-3 px-4 text-sm font-bold tracking-tight transition-colors relative cursor-pointer whitespace-nowrap ${
                activeTab === 'details'
                  ? 'text-[#F20D25]'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Product Details
              {activeTab === 'details' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F20D25]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-3 px-4 text-sm font-bold tracking-tight transition-colors relative cursor-pointer whitespace-nowrap ${
                activeTab === 'specs'
                  ? 'text-[#F20D25]'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Specifications
              {activeTab === 'specs' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F20D25]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('box')}
              className={`pb-3 px-4 text-sm font-bold tracking-tight transition-colors relative cursor-pointer whitespace-nowrap ${
                activeTab === 'box'
                  ? 'text-[#F20D25]'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              What's in the Box
              {activeTab === 'box' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F20D25]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-3 px-4 text-sm font-bold tracking-tight transition-colors relative cursor-pointer whitespace-nowrap ${
                activeTab === 'reviews'
                  ? 'text-[#F20D25]'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Reviews ({product.reviewCount})
              {activeTab === 'reviews' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F20D25]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('shipping')}
              className={`pb-3 px-4 text-sm font-bold tracking-tight transition-colors relative cursor-pointer whitespace-nowrap ${
                activeTab === 'shipping'
                  ? 'text-[#F20D25]'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Shipping & Delivery
              {activeTab === 'shipping' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F20D25]" />
              )}
            </button>
          </div>

          {/* Mobile Accordion Navigation (Matching Reference Image 3 Screen 3 & 4) */}
          <div className="sm:hidden space-y-2 mb-6">
            {[
              { id: 'details', label: 'Product Details' },
              { id: 'specs', label: 'Specifications' },
              { id: 'box', label: "What's in the Box" },
              { id: 'reviews', label: `Reviews (${product.reviewCount})` },
              { id: 'shipping', label: 'Shipping & Delivery' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'border-[#082B5B] bg-blue-50/70 text-[#082B5B]'
                    : 'border-slate-200 bg-slate-50/50 text-slate-700'
                }`}
              >
                <span>{tab.label}</span>
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    activeTab === tab.id ? 'rotate-90 text-[#F20D25]' : 'text-slate-400'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Tab 1: Product Details (matches Reference Image 2 layout with feature cards & spec preview) */}
          {activeTab === 'details' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Left Column: Description & 4 Feature Cards */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-xl font-extrabold text-[#082B5B] mb-2">
                    Product Description
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {product.fullDescription}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {product.features.map((feat, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex items-start gap-3.5 hover:bg-white hover:shadow-xs transition-all"
                    >
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-[#F20D25] flex items-center justify-center shrink-0">
                        {i === 0 ? <TrendingUp className="w-5 h-5" /> :
                         i === 1 ? <Smartphone className="w-5 h-5" /> :
                         i === 2 ? <Shield className="w-5 h-5" /> :
                         <BatteryCharging className="w-5 h-5" />}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#082B5B]">{feat.title}</h4>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{feat.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Key Specifications Table (Reference Image 2) */}
              <div className="lg:col-span-5">
                <h3 className="text-xl font-extrabold text-[#082B5B] mb-4">
                  Key Specifications
                </h3>
                <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-100 text-xs">
                  {product.specifications.slice(0, 9).map((spec, idx) => (
                    <div
                      key={idx}
                      className={`grid grid-cols-2 p-3 ${
                        idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'
                      }`}
                    >
                      <span className="font-semibold text-slate-500">{spec.label}</span>
                      <span className="font-bold text-[#082B5B] text-right font-mono">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* Tab 2: Full Specifications Table */}
          {activeTab === 'specs' && (
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-[#082B5B]">
                Complete Technical Specifications
              </h3>
              <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-100 text-sm">
                {product.specifications.map((spec, idx) => (
                  <div
                    key={idx}
                    className={`grid grid-cols-1 sm:grid-cols-3 p-3.5 ${
                      idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'
                    }`}
                  >
                    <span className="font-semibold text-slate-600 sm:col-span-1">{spec.label}</span>
                    <span className="font-bold text-[#082B5B] sm:col-span-2 font-mono">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: What's in the Box */}
          {activeTab === 'box' && (
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-[#082B5B]">
                Package Contents
              </h3>
              <ul className="space-y-3">
                {product.boxContents.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tab 4: Reviews */}
          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-[#082B5B]">
                    Customer Reviews
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-slate-800">{product.rating} out of 5</span>
                    <span className="text-xs text-slate-500">({product.reviewCount} total ratings)</span>
                  </div>
                </div>
              </div>

              {/* Sample verified customer feedback */}
              <div className="space-y-3">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-[#082B5B]">Chukwuma E. (Lekki, Lagos)</span>
                    <span className="text-xs text-slate-400 font-mono">3 days ago</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    "Super clean inverter. The WiFi monitoring app works flawlessly with my phone, and it shifts smoothly between solar panels, battery, and generator without a blip."
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-[#082B5B]">Bolanle A. (Ibadan)</span>
                    <span className="text-xs text-slate-400 font-mono">1 week ago</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    "Delivered fast to Ibadan in sturdy wooden packaging. Very satisfied with BMV customer support answering our electrician's questions."
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 5: Shipping & Delivery */}
          {activeTab === 'shipping' && (
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-[#082B5B]">
                Shipping & Delivery Terms
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {product.shippingInfo}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100">
                  <h4 className="text-xs font-bold text-[#082B5B]">Lagos & Abuja</h4>
                  <p className="text-xs text-slate-500 mt-1">24–48 Hours Direct Courier</p>
                </div>
                <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100">
                  <h4 className="text-xs font-bold text-[#082B5B]">Other States</h4>
                  <p className="text-xs text-slate-500 mt-1">3–5 Business Days Insured Logistics</p>
                </div>
                <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100">
                  <h4 className="text-xs font-bold text-[#082B5B]">Installation Booking</h4>
                  <p className="text-xs text-slate-500 mt-1">Technician arrival within 48 hours</p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Related Products Section (Reference Image 2) */}
        <div className="pt-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-extrabold text-[#082B5B] tracking-tight">
              Related Products
            </h2>
            <button
              onClick={() => {
                navigateToCategory(product.category);
              }}
              className="flex items-center gap-1 text-xs font-bold text-[#082B5B] hover:text-[#F20D25] transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
