import { Bento } from "./_components/bento";
import Footer from "./_components/footer";
import GradientBg from "./_components/gradient";
import Header from "./_components/header";


export default function Home() {
  return (
    <div className="relative h-screen flex flex-col">
      <Header className="content" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-700 to-blue-900 [clip-path:polygon(0_100%,100%_0,0_0)]">
        <GradientBg />
      </div>
      <main className="flex-1 pb-16 md:pb-20 lg:pb-24">
            <Bento />
        <div className="md:pt-64 pt-44">
          <Footer />
        </div>
      </main>
    </div>
  );
}
