// import About from "./about/page";
import ClinicData from "./components/ClinicData";
import HeroSection from "./components/HeroSection";
import ImageSlider from "./components/ImageSlider";
import TimingInfo from "./components/TimingInfo";
import About from "./about/page";
import ServiceCard from "./components/ServiceCard";
import Services from "./services/page";
import FAQ from "./components/FAQ";
import HappyClient from "./components/HappyClient";
import ContactCard from "./components/ContactCard";
import ContactForm from "./components/ContactForm";
function Page()
{
  return(
    <>
      <ImageSlider/>
      <TimingInfo/>
      <HeroSection/>
      {/* <About/> */}
      {/* <ServiceCard/> */}
      <Services/>
      <ClinicData/>
      <HappyClient/>
      <FAQ/>
    </>
  )
}
export default Page;