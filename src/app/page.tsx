import AboutUs from "@/components/AboutUs";
import Benefits from "@/components/Benefits";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero"
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <AboutUs />
      <Benefits />
      <ContactUs />
    </div>
  );
}
