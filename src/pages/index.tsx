import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';
import Coffee3D from '../components/Coffee3D';
import { useEffect } from 'react';

const images = [
  '/images/establishment1.jpg',
  '/images/establishment2.jpg',
  '/images/establishment3.jpg'
];


export default function Home() {

  useEffect(() => {
  let index = 0;
  const imgElement = document.getElementById('switching-image') as HTMLImageElement | null;
  
  const interval = setInterval(() => {
    if (!imgElement) return;
    imgElement.style.opacity = '0';
    setTimeout(() => {
      index = (index + 1) % images.length;
      imgElement.src = images[index];
      imgElement.style.opacity = '1';
    }, 500);
  }, 4000);

  return () => clearInterval(interval);
}, []);

  return (
    <>
      <Head>
        <title>Coffee Shop</title>
      </Head>


      <Navbar />

      <main className="container py-5 text-white" >
        {/* Hero */}
        <section className="hero-section position-relative d-flex justify-content-center align-items-center text-center text-white">
          <video autoPlay loop muted playsInline className="bg-video position-absolute w-100 h-100 object-fit-cover">
            <source src="/videos/background.mp4" type="video/mp4" />
          </video>

          <div className="position-relative z-1">
            <h1 className="display-4 fw-bold mb-3">WELCOME TO COFFEE SHOP</h1>
            <hr className="bg-white opacity-25 mb-4" style={{ width: '150px', margin: '0 auto' }} />
          </div>
        </section>
        <br>  

        </br>
        <hr className="text-white opacity-25 my-5" />
        <br>  

        </br>
        {/* Section 1 */}
        <section className="mb-5" id="establishment" data-aos="fade-up">
          <div className="text-center text-white mb-5">
            <h1 className="fw-bold display-5">OUR ESTABLISHMENT</h1>
            <hr className="bg-white opacity-25 mb-4" style={{ width: '150px', margin: '0 auto' }} />
          </div>

          <div className="text-center px-3 px-md-5 mb-5">
            <p className="fs-5 mb-3">
              <strong>Welcome to Coffee3D</strong> — your modern coffee destination where taste meets technology.
            </p>
            <p className="text-light">
              We blend premium coffee with cutting-edge 3D visuals to bring you a unique café experience online and offline.
            </p>
            <p className="text-light">
              Founded in <strong>2025</strong>, Coffee3D aims to redefine how you perceive coffee culture by mixing technology
              and taste in a sleek, aesthetic environment.
            </p>
            <p className="text-light">
              Our mission is simple: Deliver great coffee with a modern edge — from the beans to your screen.
            </p>
          </div>

          {/* Image Switcher */}
          <div className="establishment-image-switcher text-center" data-aos="fade-out">
            <img id="switching-image" src="/images/establishment1.jpg" alt="Establishment" />
          </div>
        </section>
        <br>  

        </br>
        <hr className="text-white opacity-25 my-5" />
        <br>  

        </br>
        {/* Section 2 */}
        <section className="row align-items-center mb-5"  data-aos="fade-down">
        <h1
          className="text-center fw-bold mb-5"
          data-aos="fade-down"
          >
          ABOUT US
        </h1>
        <hr className="bg-white opacity-25 mb-4" style={{ width: '150px', margin: '0 auto' }} />
        <section className="row align-items-center mb-5" >
        <div className="col-md-6 text-light" data-aos="fade-right">
            <p className="fs-5">
              <strong>Welcome to Coffee3D</strong> — your modern coffee destination where taste meets technology.
            </p>
            <p className="text-light">
              We blend premium coffee with cutting-edge 3D visuals to bring you a unique café experience online and offline.
            </p>
            <p className="text-light">
              Founded in <strong>2025</strong>, Coffee3D aims to redefine how you perceive coffee culture by mixing technology
              and taste in a sleek, aesthetic environment.
            </p>
            <p className="text-light">
              Our mission is simple: Deliver great coffee with a modern edge — from the beans to your screen.
            </p>
          </div>

          {/* Google Map */}
          <div
            className="col-md-6"
            data-aos="zoom-in"
            data-aos-delay="200"
            style={{ height: '300px' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019688393658!2d-122.41941548468164!3d37.77492977975959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085815387fbdc87%3A0xb1c964e70c5f8248!2sSan%20Francisco%20Coffee!5e0!3m2!1sen!2sus!4v1686507988032!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Coffee3D Location"
            ></iframe>
          </div>
          </section>

        </section>
        <br>  

        </br>
        <hr className="text-white opacity-25 my-5" />
        <br>  

        </br>
        {/* Section 1 */}
        <section className="row align-items-center mb-5"  data-aos="fade-right">
          <div className="col-md-6 mb-3 mb-md-0">
            <img
              src="/images/download.jpg"
              alt="Coffee Beans"
              style={{ height: '300px', objectFit: 'cover' }}
              className="img-fluid rounded-4 shadow"
            />
          </div>
          <div className="col-md-6">
            <h3 className="mb-3">Freshly Roasted Beans</h3>
            <p className="text-secondary">
              Every cup starts with carefully selected, freshly roasted beans to ensure bold flavor and aroma. Our beans are ethically sourced and roasted daily in-house.
            </p>
          </div>
        </section>

        <hr className="text-white opacity-75 my-5" style={{ width: '800px', margin: '0 auto' }}/>

        {/* Section 2 */}
        <section className="row align-items-center flex-md-row-reverse mb-5" data-aos="fade-left">
          <div className="col-md-6 mb-3 mb-md-0">
            <img
              src="/images/espresso.jpg"
              alt="Fresh Coffee"
              style={{ height: '300px', width: '500px', objectFit: 'cover' }}
              className="img-fluid rounded-4 shadow"
            />
          </div>
          <div className="col-md-6">
            <h3 className="mb-3">Perfectly Crafted Cups</h3>
            <p className="text-secondary">
              Whether you're a latte lover or espresso enthusiast, our baristas are trained to craft the perfect cup, every time. Smooth, rich, and ready for your day.
            </p>
          </div>
        </section>

        <hr className="text-white opacity-25 my-5" />


      </main>

      <Footer />
    </>
  );
}
