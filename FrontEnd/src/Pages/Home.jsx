import NavBar from "../Components/NavBar";
import HeroSection from "../Components/HeroSection";
import DeliveryServiceSection from "../Components/DeliveryServiceSection";
import DeliveryZoneSection from "../Components/DeliveryZoneSection";
import FeedBackSection from "../Components/FeedBackSection";
import FooterComponent from "../Components/FooterComponent";
import MenuSection from "../Components/MenuSection";

export default function Home() {
  return (
    <div className="font-sans bg-[#faf7f2] text-gray-800 min-h-screen">
      {/* ── NAVBAR ── */}
      <NavBar />
      {/* ── HERO ── */}
      <HeroSection />
      {/* ── DELIVERY SERVICE ── */}
      <DeliveryServiceSection />
      {/* ── MENU ── */}
      <MenuSection  />
      {/* ── DELIVERY ZONES ── */}
      <DeliveryZoneSection />
      {/* ── FEEDBACK ── */}
      <FeedBackSection />
      {/* ── FOOTER ── */}
      <FooterComponent />
    </div>
  );
}
