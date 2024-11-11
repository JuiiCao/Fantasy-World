import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Developer from "@/components/sections/developer";
import Download from "@/components/sections/download";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Developer />
      <Download />
      <Footer />
    </>
  );
}