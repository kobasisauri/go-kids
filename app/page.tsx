"use client";

import Hero from "./components/Hero";
import Process from "./components/Process";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Partners from "./components/Partners";
import News from "./components/News";
import Subscribe from "./components/Subscribe";
import Contact from "./components/Contact";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";

export default function Home() {
  return (
    <div className="dizme_tm_all_wrap">
      <MobileMenu />
      <Header />
      <Hero />
      <Process />
      <About />
      <Portfolio />
      <Skills />
      <Services />
      <Testimonials />
      <Partners />
      <News />
      <Subscribe />
      <Contact />
    </div>
  );
}
