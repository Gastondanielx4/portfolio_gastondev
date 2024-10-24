import Navbar from "../components/navbar";
import Introduction from "@/components/introduction";
import AboutMe from "../components/about-me";
import Experience from "@/components/experience";
import Services from "@/components/services";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
<main className="pb-24">
  <Navbar/>
  <Introduction/>
  <AboutMe/>
  <Experience/>
  <Services/>
  <Contact/>
  <Footer/>
</main>  );
}
