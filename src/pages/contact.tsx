import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Coffee3D</title>
      </Head>

      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/videos/contact-background.mp4" type="video/mp4" />
      </video>


      <Navbar />

      <main className="container py-5" style={{ minHeight: '80vh' }}>
        <h1 className="text-center text-white mb-5" data-aos="fade-down">
          <b>CONTACT US</b>
        </h1>

        <div className="row justify-content-center" data-aos="zoom-in">
          <div className="col-md-6">
            <form className="bg-transparent text-white p-4 p-md-5 rounded-4 shadow-lg">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control bg-transparent text-white border-secondary"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control bg-transparent text-white border-secondary"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  className="form-control bg-transparent text-white border-secondary"
                  rows={5}
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <button type="submit" className="btn btn-outline-light w-100 mt-3">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
