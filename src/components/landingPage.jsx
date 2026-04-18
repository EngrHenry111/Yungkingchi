import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

import React, { useEffect, useState, useRef } from "react";
import "./landing.css";

import demoVideo from "../assets/videos/vid1.mp4";

import logo from "../assets/images/logo.jpeg";
import car from "../assets/images/car.avif";
import ebike from "../assets/images/ebike.webp";
import phone from "../assets/images/phone.avif";
import shoes from "../assets/images/shoes.jpg";
import plant from "../assets/images/plants.avif";


import im from "../assets/images/ebike.webp"
import im1 from "../assets/images/im1.jpeg"
import im2 from "../assets/images/im2.jpeg"
import im3 from "../assets/images/im3.jpeg"
import im4 from "../assets/images/im4.jpeg"
import im5 from "../assets/images/im5.jpeg"
import im6 from "../assets/images/im6.jpeg"
import im7 from "../assets/images/im7.jpeg"
import im8 from "../assets/images/im8.jpeg"
import im9 from "../assets/images/im9.jpeg"
import im10 from "../assets/images/im10.jpeg"
import im11 from "../assets/images/im11.jpeg"
import im12 from "../assets/images/im12.jpeg"
import im13 from "../assets/images/im13.jpeg"
import im14 from "../assets/images/im14.jpeg"
import im15 from "../assets/images/im15.jpeg"
import im16 from "../assets/images/im16.jpeg"
import im17 from "../assets/images/im17.jpeg"
import im18 from "../assets/images/im18.jpeg"
import im19 from "../assets/images/im19.jpeg"
import im20 from "../assets/images/im20.jpeg"
import im21 from "../assets/images/im21.jpeg"
import im22 from "../assets/images/im22.jpeg"
import im23 from "../assets/images/im23.jpeg"
import im24 from "../assets/images/im24.jpeg"
import im25 from "../assets/images/im.jpeg"
import im26 from "../assets/images/im26.jpeg"
import im27 from "../assets/images/im27.jpeg"
import im28 from "../assets/images/im28.jpeg"
import im29 from "../assets/images/im29.jpeg"
import im30 from "../assets/images/im30.jpeg"
import im31 from "../assets/images/im31.jpeg"
import im32 from "../assets/images/im32.jpeg"
import im33 from "../assets/images/im33.jpeg"
import im34 from "../assets/images/im34.jpeg"
import im35 from "../assets/images/im35.jpeg"
import im36 from "../assets/images/im36.jpeg"
import im37 from "../assets/images/im37.jpeg"
import im38 from "../assets/images/im38.jpeg"
import im39 from "../assets/images/im39.jpeg"
import im40 from "../assets/images/im40.jpeg"
import im41 from "../assets/images/im41.jpeg"
import im42 from "../assets/images/im42.jpeg"
import im43 from "../assets/images/im43.jpeg"
import im44 from "../assets/images/im44.jpeg"
import im45 from "../assets/images/im45.jpeg"
import im46 from "../assets/images/im46.jpeg"
import im47 from "../assets/images/im47.jpeg"
import im48 from "../assets/images/im48.jpeg"
import im49 from "../assets/images/im49.jpeg"
import im50 from "../assets/images/im50.jpeg"
import im51 from "../assets/images/im51.jpeg"
import im52 from "../assets/images/im52.jpeg"
import im53 from "../assets/images/im53.jpeg"
import im54 from "../assets/images/im54.jpeg"
import im55 from "../assets/images/im55.jpeg"
import im56 from "../assets/images/im56.jpeg"
import im57 from "../assets/images/im57.jpeg"
import im58 from "../assets/images/im58.jpeg"
import im59 from "../assets/images/im59.jpeg"
import im60 from "../assets/images/im60.jpeg"
import im61 from "../assets/images/im61.jpeg"
import im62 from "../assets/images/im.jpeg"
import im63 from "../assets/images/im63.jpeg"
import im64 from "../assets/images/im64.jpeg"
import im65 from "../assets/images/im65.jpeg"
import im66 from "../assets/images/im66.jpeg"
import im67 from "../assets/images/im67.jpeg"
import im68 from "../assets/images/im68.jpeg"
import im69 from "../assets/images/im69.jpeg"
import im70 from "../assets/images/im70.jpeg"
import im71 from "../assets/images/im71.jpeg"
import im72 from "../assets/images/im72.jpeg"
import im73 from "../assets/images/im73.jpeg"
import im74 from "../assets/images/im74.jpeg"
import im75 from "../assets/images/im75.jpeg"
import im76 from "../assets/images/im76.jpeg"
import im77 from "../assets/images/im77.jpeg"
import im78 from "../assets/images/im78.jpeg"
import im79 from "../assets/images/im79.jpeg"
import im80 from "../assets/images/im80.jpeg"
import im81 from "../assets/images/im81.jpeg"
import im82 from "../assets/images/im82.jpeg"
import im83 from "../assets/images/im83.jpeg"
import im84 from "../assets/images/im84.jpeg"
import im85 from "../assets/images/im.jpeg"
import im86 from "../assets/images/im86.jpeg"
import im87 from "../assets/images/im87.jpeg"
import im88 from "../assets/images/im88.jpeg"
import im89 from "../assets/images/im89.jpeg"
import im90 from "../assets/images/im90.jpeg"
import im91 from "../assets/images/im91.jpeg"
import im92 from "../assets/images/im92.jpeg"
import im93 from "../assets/images/im93.jpeg"
import im94 from "../assets/images/im94.jpeg"


import { motion } from "framer-motion";
import Particles from "react-tsparticles";

const YILCard = () => {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);


  const products = [
    im, im1, im2, im3, im4, im5, im6, im7, im8, im9, im10, im11, im12, im13, im14, im15,
    im16, im17, im18, im19, im20, im21, im22, im23, im24, im25, im26, im27, im28, im29, im30,
    im31, im32, im33, im34, im35, im36, im37, im38, im39, im40, im41, im42, im43, im44, im45,
    im46, im47, im48, im49, im50, im51, im52, im53, im54, im55, im56, im57, im58, im59, im60,
    im61, im62, im63, im64, im65, im66, im67, im68, im69, im70, im71, im72, im73, im74, im75,
    im76, im77, im78, im79, im80, im81, im82, im83, im84, im85, im86, im87, im88, im89, im90,
    im91, im92, im93, im94,
    car, ebike, phone, shoes, plant
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [products.length]);

  const handleContact = () => {
    const phone = "2348100385127";
    const message = encodeURIComponent(
      "Hello, I'm interested in your products and services from YIL."
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  // ✅ CLEAN VIDEO LOGIC
const handleTogglePlay = () => {
  if (playing) {
    videoRef.current.pause();
    setPlaying(false);
  } else {
    videoRef.current.play();
    setPlaying(true);
  }
};



  return (
    <div className="yil-wrapper">

      {/* PARTICLES */}
      <Particles
        options={{
          particles: {
            number: { value: 20 },
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

        {/* PRODUCTS */}
        <h1>Our Products</h1>

        <div className="carousel">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={15}
            slidesPerView={1}
            autoplay={{ delay: 2500 }}
pagination={{ clickable: true, dynamicBullets: true }}           >
            {products.map((item, i) => (
              <SwiperSlide key={i}>
                <motion.img
                  src={item}
                  alt="product"
                  className="carousel-img"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 🎬 VIDEO SECTION */}
        <section className="video-section">
          <h2>Watch Our Product</h2>

          <div className="video-card">

  <video
    ref={videoRef}
    src={demoVideo}
    className="video"
    preload="metadata"
    playsInline
    muted={muted}
    onPause={() => setPlaying(false)}
    onEnded={() => setPlaying(false)}
  />

  {/* CLICK ANYWHERE TO TOGGLE */}
  <div className="video-overlay" onClick={handleTogglePlay}>
    {!playing && (
      <button className="play-btn">▶</button>
    )}
  </div>

  {/* SOUND BUTTON */}
  {playing && (
    <button
      className="sound-btn"
      onClick={(e) => {
        e.stopPropagation(); // prevent pausing when clicking sound
        setMuted(!muted);
      }}
    >
      {muted ? "🔇" : "🔊"}
    </button>
  )}

</div>
        </section>

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
              <motion.div key={i} className="service-card">
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
          <p>Contact Us:</p>
          <p>🇨🇳 +86 166 2469 3442</p>
          <p>🇳🇬 +234 810 038 5127</p>
        </div>

      </motion.div>
    </div>
  );
};

export default YILCard;