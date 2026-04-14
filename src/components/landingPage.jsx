import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";


import React, { useEffect, useState } from "react";
import "./landing.css";

import logo from "../assets/images/logo.jpeg";
import car from "../assets/images/car.avif";
import ebike from "../assets/images/ebike.webp";
import phone from "../assets/images/phone.avif";
import shoes from "../assets/images/shoes.jpg";
import plant from "../assets/images/plants.avif";

import { color, motion } from "framer-motion";
import Particles from "react-tsparticles";

const YILCard = () => {
  const [index, setIndex] = useState(0);

  const products = [car, ebike, phone, shoes, plant];

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [products.length]); // ✅ FIXED dependency

  const handleContact = () => {
    const phone = "2348100385127"; // ✅ FIXED (no spaces, correct format)
    const message = encodeURIComponent(
      "Hello, I'm interested in your products and services from YIL."
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <div className="yil-wrapper">

      {/* 🌌 PARTICLES */}
      <Particles
        options={{
          particles: {
            number: { value: 20 }, // ✅ lighter for mobile
            size: { value: 2 },
            move: { speed: 0.5 },
            opacity: { value: 0.3 },
          },
        }}
        className="particles"
      />

      <motion.div
        className="yil-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >

        {/* LOGO */}
        <motion.div
          className="yil-logo"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <img src={logo} alt="YIL Logo" />
        </motion.div>

        {/* HEADER */}
        <div className="yil-header">
          <h1>
            Currency <span>Exchange</span>
          </h1>
          <h2>Global Exporter</h2>
          <p>
            Fast, trusted sourcing & export solutions worldwide.
          </p>

          <button onClick={handleContact} className="contact-btn">
            Chat on WhatsApp
          </button>
        </div>

        {/* 🔥 AUTO SLIDER */}
        <div className="carousel">

  <Swiper
    modules={[Autoplay, Pagination]}
    spaceBetween={15}
    slidesPerView={1}
    autoplay={{ delay: 2500 }}
    pagination={{ clickable: true }}
  >

    {products.map((item, i) => (
      <SwiperSlide key={i}>
        <motion.img
          src={item}
          alt="product"
          className="carousel-img"
          initial={{ opacity: 0.8, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        />
      </SwiperSlide>
    ))}

  </Swiper>

</div>

        {/* SERVICES */}
        <div className="services">
          <h3>Our Services</h3>

          <div className="service-grid">
            {[
              "💱 Exchange",
              "🌍 Export",
              "🚗 Cars",
              "🚲 Bikes",
              "📱 Electronics",
              "👟 Fashion",
              "🌿 Plants",
            ].map((service, i) => (
              <motion.div
                key={i}
                className="service-card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {service}
              </motion.div>
            ))}
          </div>
        </div>

        {/* TRUST */}
      <section className="trust">
        <h2>Why Choose Us</h2>

        <div className="trust-grid">
          <div>✔ Trusted Global Network</div>
          <div>✔ Fast Delivery</div>
          <div>✔ Affordable Pricing</div>
          <div>✔ Reliable Support</div>
        </div>
      </section>


        {/* CONTACT */}
        <div className="contact">
          <p style={{color: "#a855f7", fontSize: "22px"}}>Contact Us:</p>
          <p>🇨🇳 +86 166 2469 3442</p>
          <p>🇳🇬 +234 810 038 5127</p>
        </div>

        {/* FOOTER */}
        {/* <div className="footer">
          Yungkingchi Intl. Ltd.
        </div> */}

      </motion.div>


      

      
    </div>
  );
};

export default YILCard;