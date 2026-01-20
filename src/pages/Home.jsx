import Hero from "../components/Hero"
import AboutSection from "../components/AboutSection"
import ContactSection from "../components/ContactSection"
import Navbar from "../components/Navbar"
import ServicesSection from "../components/ServicesSection"
import GallerySection from "../components/GallerySection"
const Home = () => {
  return (
   <>
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
    </>
  )
}

export default Home