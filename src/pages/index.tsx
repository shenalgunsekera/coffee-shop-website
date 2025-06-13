import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';
import Coffee3D from '../components/Coffee3D';

export default function Home() {
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

        {/* 3D Visual Section */}

      </main>

      <Footer />
    </>
  );
}
