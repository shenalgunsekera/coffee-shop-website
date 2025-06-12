import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-white pt-5 pb-3">
        <hr className="bg-white opacity-25 mb-4" style={{ width: '300px', margin: '0 auto' }} />
        <br></br>
      <div className="container">
        <div className="row gy-4 justify-content-between">

          {/* Logo & Contact Info */}
          <div className="col-md-3" data-aos="fade-up">
            <h5>Contact</h5>
            <hr className="bg-white opacity-25 mb-3" style={{ width: '50px' }} />
            <p><strong>Phone:</strong> +94 743 364 614</p>

            <div>
              <h6>Follow Us</h6>
              <div className="d-flex gap-3 fs-5">
                <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-white"><i className="fab fa-whatsapp"></i></a>
                <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
                
              </div>
            </div>
          </div>

          {/* Laction */}
          <div className="col-md-2" data-aos="fade-up" data-aos-delay="100">
            <h5>Location</h5>
            <hr className="bg-white opacity-25 mb-3" style={{ width: '50px' }} />
            <ul className="list-unstyled small">
                <p><strong>Province: </strong>Western</p>
                <p><strong>City: </strong>Kaduwela</p>
                <p><strong>Road: </strong>Weraluwila Rd, Kaduwela</p>
            </ul>
          </div>

          {/* About */}
          <div className="col-md-2" data-aos="fade-up" data-aos-delay="100">
            <h5>About</h5>
            <hr className="bg-white opacity-25 mb-3" style={{ width: '50px' }} />
            <ul className="list-unstyled small">
              <li><Link href="/about" className="text-white text-decoration-none">About Us</Link></li>
              <li><a href="#" className="text-white text-decoration-none">Delivery Information</a></li>
              <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-white text-decoration-none">Terms & Conditions</a></li>
              <li><Link href="/contact" className="text-white text-decoration-none">Contact Us</Link></li>
            </ul>
          </div>

          
        </div>
      </div>
    </footer>
  );
}
