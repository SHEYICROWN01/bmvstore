import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Header } from './components/layout/Header';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileNavDrawer } from './components/layout/MobileNavDrawer';

// Home Page Sections
import { HeroCarousel } from './components/home/HeroCarousel';
import { TrustBenefitsStrip } from './components/home/TrustBenefitsStrip';
import { ShopByCategory } from './components/home/ShopByCategory';
import { HotDealsSection } from './components/home/HotDealsSection';
import { PromotionalBanners } from './components/home/PromotionalBanners';
import { FeaturedProducts } from './components/home/FeaturedProducts';
import { OurServices } from './components/home/OurServices';
import { WhyChooseBMV } from './components/home/WhyChooseBMV';
import { TestimonialsAndStory } from './components/home/TestimonialsAndStory';
import { BrandPartners } from './components/home/BrandPartners';
import { NewsletterSection } from './components/home/NewsletterSection';

// Views
import { ProductDetailPage } from './components/products/ProductDetailPage';
import { ShopCatalogView } from './components/views/ShopCatalogView';
import { ServicesView } from './components/views/ServicesView';
import { AboutView } from './components/views/AboutView';
import { ContactView } from './components/views/ContactView';

// Modals
import { CartDrawer } from './components/modals/CartDrawer';
import { CheckoutModal } from './components/modals/CheckoutModal';
import { QuoteCalculatorModal } from './components/modals/QuoteCalculatorModal';
import { StoryVideoModal } from './components/modals/StoryVideoModal';
import { Toast } from './components/modals/Toast';
import { MessageCircle } from 'lucide-react';

const MainContent: React.FC = () => {
  const { currentPage, selectedProduct } = useShop();

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#17243A] w-full overflow-x-hidden">
      <AnnouncementBar />
      <Header />
      <Navbar />

      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <HeroCarousel />
            <TrustBenefitsStrip />
            <ShopByCategory />
            <HotDealsSection />
            <PromotionalBanners />
            <FeaturedProducts />
            <OurServices />
            <WhyChooseBMV />
            <TestimonialsAndStory />
            <BrandPartners />
            <NewsletterSection />
          </>
        )}

        {currentPage === 'shop' && <ShopCatalogView />}

        {currentPage === 'product-detail' && selectedProduct && (
          <ProductDetailPage product={selectedProduct} />
        )}

        {currentPage === 'services' && <ServicesView />}

        {currentPage === 'about' && <AboutView />}

        {currentPage === 'contact' && <ContactView />}
      </main>

      <Footer />

      {/* Floating WhatsApp Quick Action Button - positioned bottom right so it NEVER blocks content */}
      <a
        href="https://wa.me/2348101234567?text=Hello%20BMV,%20I%20would%20like%20to%20enquire%20about%20your%20solar%20and%20CCTV%20solutions"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 bg-[#25D366] hover:bg-[#1EBE5D] text-white p-3 sm:p-3.5 rounded-full shadow-2xl flex items-center gap-2 group transition-all active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
        <span className="hidden sm:inline font-bold text-xs pr-1">Chat on WhatsApp</span>
      </a>

      {/* Drawers & Modals */}
      <CartDrawer />
      <CheckoutModal />
      <QuoteCalculatorModal />
      <StoryVideoModal />
      <MobileNavDrawer />
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <MainContent />
    </ShopProvider>
  );
}
