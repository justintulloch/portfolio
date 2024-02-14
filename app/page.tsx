
import Footer from "./_components/footer";
import HeroSection from "./_components/hero-section";





export default function Home() {
  return (
    <main className="flex-1 pb-16 md:pb-20 lg:pb-24">
      <HeroSection className="content mt-12 md:mt-16 lg:mt-20" />
    <div className="md:pt-64 pt-44">
          <Footer />
      </div>
  </main>
  );
}
