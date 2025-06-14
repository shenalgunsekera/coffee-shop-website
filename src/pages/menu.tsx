import Head from 'next/head';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function Menu() {
  const products = [
    {
      id: 1,
      name: 'Espresso',
      description: 'Strong and bold, served hot.',
      price: '$3.00',
      image: '/images/1.jpg',
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Espresso with steamed milk and foam.',
      price: '$3.50',
      image: '/images/2.jpg',
    },
    {
      id: 1,
      name: 'Espresso',
      description: 'Strong and bold, served hot.',
      price: '$3.00',
      image: '/images/1.jpg',
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Espresso with steamed milk and foam.',
      price: '$3.50',
      image: '/images/2.jpg',
    },
    {
      id: 1,
      name: 'Espresso',
      description: 'Strong and bold, served hot.',
      price: '$3.00',
      image: '/images/1.jpg',
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Espresso with steamed milk and foam.',
      price: '$3.50',
      image: '/images/2.jpg',
    },
    {
      id: 1,
      name: 'Espresso',
      description: 'Strong and bold, served hot.',
      price: '$3.00',
      image: '/images/1.jpg',
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Espresso with steamed milk and foam.',
      price: '$3.50',
      image: '/images/2.jpg',
    },
    {
      id: 1,
      name: 'Espresso',
      description: 'Strong and bold, served hot.',
      price: '$3.00',
      image: '/images/1.jpg',
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Espresso with steamed milk and foam.',
      price: '$3.50',
      image: '/images/2.jpg',
    },
    {
      id: 1,
      name: 'Espresso',
      description: 'Strong and bold, served hot.',
      price: '$3.00',
      image: '/images/1.jpg',
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Espresso with steamed milk and foam.',
      price: '$3.50',
      image: '/images/2.jpg',
    },
    {
      id: 1,
      name: 'Espresso',
      description: 'Strong and bold, served hot.',
      price: '$3.00',
      image: '/images/1.jpg',
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Espresso with steamed milk and foam.',
      price: '$3.50',
      image: '/images/2.jpg',
    },
    {
      id: 1,
      name: 'Espresso',
      description: 'Strong and bold, served hot.',
      price: '$3.00',
      image: '/images/1.jpg',
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Espresso with steamed milk and foam.',
      price: '$3.50',
      image: '/images/2.jpg',
    },
    {
      id: 1,
      name: 'Espresso',
      description: 'Strong and bold, served hot.',
      price: '$3.00',
      image: '/images/1.jpg',
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Espresso with steamed milk and foam.',
      price: '$3.50',
      image: '/images/2.jpg',
    },
    {
      id: 1,
      name: 'Espresso',
      description: 'Strong and bold, served hot.',
      price: '$3.00',
      image: '/images/1.jpg',
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Espresso with steamed milk and foam.',
      price: '$3.50',
      image: '/images/2.jpg',
    },
  ];

  return (
    <>
      <Head>
        <title>Menu | Coffee3D</title>
      </Head>

      {/* 🔽 Page-Specific Video Background */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/videos/menu-background.mp4" type="video/mp4" />
      </video>

      <Navbar />

      <main className="container py-5">
        <h1 className="text-center mb-5"><b>OUR MENU</b></h1>
        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 bg-dark text-white border-0 shadow-lg custom-card">
                <img
                src={product.image}
                alt={product.name}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text small">{product.description}</p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="fw-bold">{product.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
