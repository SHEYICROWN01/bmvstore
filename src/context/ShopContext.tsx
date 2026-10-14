import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, QuoteRequestData } from '../types';
import { products } from '../data/products';

type PageView = 'home' | 'shop' | 'product-detail' | 'services' | 'about' | 'contact';

interface ToastState {
  id: string;
  message: string;
  type: 'cart' | 'wishlist' | 'info';
  productName?: string;
}

interface ShopContextType {
  currentPage: PageView;
  setCurrentPage: (page: PageView) => void;
  selectedProductId: string;
  selectedProduct: Product | undefined;
  navigateToProduct: (productId: string) => void;
  navigateToCategory: (categorySlug: string) => void;
  
  // Cart
  cart: CartItem[];
  cartCount: number;
  cartSubtotal: number;
  addToCart: (product: Product, quantity?: number, includeInstallation?: boolean) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  toggleInstallation: (productId: string) => void;
  clearCart: () => void;
  
  // Wishlist
  wishlist: string[];
  wishlistCount: number;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  
  // Search & Filters
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategoryFilter: string;
  setSelectedCategoryFilter: (category: string) => void;
  
  // Modals & Drawers
  cartDrawerOpen: boolean;
  setCartDrawerOpen: (open: boolean) => void;
  quoteModalOpen: boolean;
  setQuoteModalOpen: (open: boolean) => void;
  consultationModalOpen: boolean;
  setConsultationModalOpen: (open: boolean) => void;
  storyModalOpen: boolean;
  setStoryModalOpen: (open: boolean) => void;
  checkoutModalOpen: boolean;
  setCheckoutModalOpen: (open: boolean) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  
  // Toasts
  toast: ToastState | null;
  clearToast: () => void;
  
  // Quick Quote submission state
  lastSubmittedQuote: QuoteRequestData | null;
  submitQuoteRequest: (data: QuoteRequestData) => Promise<boolean>;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('deye-5kw-hybrid');
  
  // Cart state with local storage persistence
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('bmv_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('bmv_wishlist');
      return saved ? JSON.parse(saved) : ['deye-5kw-hybrid'];
    } catch {
      return ['deye-5kw-hybrid'];
    }
  });

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');

  // Modals
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [storyModalOpen, setStoryModalOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toast
  const [toast, setToast] = useState<ToastState | null>(null);
  const [lastSubmittedQuote, setLastSubmittedQuote] = useState<QuoteRequestData | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('bmv_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('Could not persist cart', e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('bmv_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.warn('Could not persist wishlist', e);
    }
  }, [wishlist]);

  const showToast = (message: string, type: 'cart' | 'wishlist' | 'info', productName?: string) => {
    const id = Date.now().toString();
    setToast({ id, message, type, productName });
    setTimeout(() => {
      setToast((prev) => (prev?.id === id ? null : prev));
    }, 3800);
  };

  const clearToast = () => setToast(null);

  const selectedProduct = products.find((p) => p.id === selectedProductId) || products[0];

  const navigateToProduct = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentPage('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCategory = (categorySlug: string) => {
    setSelectedCategoryFilter(categorySlug);
    setCurrentPage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (product: Product, quantity = 1, includeInstallation = false) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity, includeInstallation: includeInstallation || item.includeInstallation }
            : item
        );
      }
      return [...prev, { product, quantity, includeInstallation }];
    });

    showToast(`Added ${quantity}x "${product.name}" to cart`, 'cart', product.name);
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from cart', 'info');
  };

  const toggleInstallation = (productId: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId
          ? { ...item, includeInstallation: !item.includeInstallation }
          : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const toggleWishlist = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast(`Removed "${product?.name || 'Item'}" from wishlist`, 'wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showToast(`Saved "${product?.name || 'Item'}" to wishlist`, 'wishlist');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartSubtotal = cart.reduce((sum, item) => {
    const itemTotal = item.product.price * item.quantity;
    const installTotal = item.includeInstallation && item.product.installationFee ? item.product.installationFee : 0;
    return sum + itemTotal + installTotal;
  }, 0);

  const submitQuoteRequest = async (data: QuoteRequestData): Promise<boolean> => {
    // Simulated mock submission with verified validation
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLastSubmittedQuote(data);
    showToast('Quote request submitted successfully! An engineer will call you shortly.', 'info');
    return true;
  };

  return (
    <ShopContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        selectedProductId,
        selectedProduct,
        navigateToProduct,
        navigateToCategory,
        cart,
        cartCount,
        cartSubtotal,
        addToCart,
        updateQuantity,
        removeFromCart,
        toggleInstallation,
        clearCart,
        wishlist,
        wishlistCount: wishlist.length,
        toggleWishlist,
        isInWishlist,
        searchQuery,
        setSearchQuery,
        selectedCategoryFilter,
        setSelectedCategoryFilter,
        cartDrawerOpen,
        setCartDrawerOpen,
        quoteModalOpen,
        setQuoteModalOpen,
        consultationModalOpen,
        setConsultationModalOpen,
        storyModalOpen,
        setStoryModalOpen,
        checkoutModalOpen,
        setCheckoutModalOpen,
        mobileMenuOpen,
        setMobileMenuOpen,
        toast,
        clearToast,
        lastSubmittedQuote,
        submitQuoteRequest
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
