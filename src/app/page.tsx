import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import Nav from "@/components/nav";
import Portfolio from "@/components/portfolio";
import Work from "@/components/work";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Portfolio />
      <Work />
      <Footer />
    </div>
  );
}
