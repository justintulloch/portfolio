import Footer from "./_components/footer";
import GradientBg from "./_components/gradient";
import Header from "./_components/header";
import HeroSection from "./_components/hero-section";

export default function Home() {
  return (
    <div className="relative h-screen flex flex-col">
      <Header className="content" />
      <div className="absolute inset-0 -z-10">
        <GradientBg />
      </div>
      <main className="flex-1 pb-16 md:pb-20 lg:pb-24">
        <HeroSection className="content mt-12 md:mt-16 lg:mt-20" />
        <div className="md:pt-64 pt-44">
          <Footer />
        </div>
      </main>
    </div>
  );
}
