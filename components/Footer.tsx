import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Discover my professional journey through a curated collection of projects, showcasing my skills and experiences. From web development to Artifical Intelligence, each project reflects my dedication to creativity and excellence.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/profile.php?id=100061613885111"
              className="flex items-center hover:text-white transition-colors duration-300"
            >
              <FaFacebook className="mr-1" /> Facebook
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ch-muhammad-tayyab/"
              className="flex items-center hover:text-white transition-colors duration-300"
            >
              <FaLinkedin className="mr-1" /> LinkedIn
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/grow_wid_muhammad/#"
              className="flex items-center hover:text-white transition-colors duration-300"
            >
              <FaInstagram className="mr-1" /> Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Karachi, Pakistan</p>
          <p>Karachi, 856090</p>
          <p>Email: <a href="mailto:m.tayyab1263@gmail.com" className="hover:text-white transition-colors duration-300">m.tayyab1263@gmail.com</a></p>
          <p>Phone: <a href="tel:+923421018093" className="hover:text-white transition-colors duration-300">(+92) 3421018093</a></p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">© 2024 Portfolio Website. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
