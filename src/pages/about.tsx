import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Coffee3D</title>
      </Head>

      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/videos/about-background.mp4" type="video/mp4" />
      </video>

      <Navbar />

      <main className="container py-5" style={{ minHeight: '80vh' }}>
        <h1
          className="text-center fw-bold mb-5"
          data-aos="fade-down"
        >
          ABOUT US
        </h1>

        {/* Section Background */}
        <section
          className="row gy-4 p-4 rounded-4 shadow"
          data-aos="fade-up"
        >
          {/* Text Section */}
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

        {/* Optional Divider */}
        <hr className="my-5 text-white opacity-25" data-aos="fade-in" />

        {/* Optional Second Section */}
        <div
          className="text-center text-secondary"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 className="text-white mb-3">Come visit us or message us on WhatsApp!</h3>
          <a
            href="https://wa.me/94743364614?text=Hi%20Coffee3D%2C%20I%20want%20to%20learn%20more!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light mt-2 px-4 py-2"
          >
            Contact on WhatsApp
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}
