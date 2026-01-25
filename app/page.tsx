import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"

import Hero from "./components/sections/Hero"
import Features from "./components/sections/Features"
import About from "./components/sections/About"
import Listing from "./components/sections/Listing"
import Testimonials from "./components/sections/Testimonials"
import Blog from "./components/sections/Blog"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <About />
      <Listing />
      <Testimonials />
      <Blog />
      <Footer />
    </>
  )
}
