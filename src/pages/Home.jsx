import { useEffect } from 'react';
import Navbar from "../components/navbar/Navbar";
import HomeHero from "../components/home/HomeHero/HomeHero";
import HomeAbout from "../components/home/HomeAbout/HomeAbout";
import HomeWhyChoose from "../components/home/HomeWhyChoose/HomeWhyChoose";
import ShopByCategory from "../components/sections/ShopByCategory";
import HomeCommitment from "../components/home/HomeCommitment/HomeCommitment";
import HomeValues from "../components/home/HomeValues/HomeValues";
import HomePeaceOfMind from "../components/home/HomePeaceOfMind/HomePeaceOfMind";
import HomeNotice from "../components/home/HomeNotice/HomeNotice";
import Footer from "../components/footer/Footer";

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal, .reveal-zoom, .reveal-left, .reveal-right');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (

    <>
      <Navbar />
      <HomeHero />
      <HomeAbout />
      <HomeWhyChoose />
      <ShopByCategory />
      <HomeCommitment />
      <HomeValues />
      <HomePeaceOfMind />
      <HomeNotice />
      <Footer />
    </>
  );
};

export default Home;
