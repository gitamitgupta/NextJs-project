import FeaturedCourse from "@/components/FeaturedCourse";
import HeroSection from "../components/HeroSection";
import StickyScrollRevealDemo from "../components/WhyChoseUs";
import InfiniteMovingCardsDemo from "../components/Testimonial"
export default function Home() {
  return (
    <h1 className="min-h-screen bg-black/[.96] antialiased bg-grid-white/[0.02]">
   <HeroSection/>
   <FeaturedCourse/>
   <StickyScrollRevealDemo/>
   <InfiniteMovingCardsDemo/>
    </h1>
  );
}
