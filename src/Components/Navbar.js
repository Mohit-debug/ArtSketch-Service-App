import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Modal from './modal';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { IoCloseCircle } from 'react-icons/io5';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const location = useLocation();

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    setActiveMenuItem(location.pathname);
  }, [location]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = (path) => {
    setActiveMenuItem(path);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    reset();
    setShowModal(false);
    setMessage("");
  };

  const submit = async (data) => {
    setLoading(true); // Start loading
    const response = await fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    setLoading(false); // Stop loading

    if (response.ok) {
      setMessageType("success");
      setMessage("Subscription successful");
      setTimeout(() => setMessage(""), 1000);
      reset();
      setShowModal(false);
    } else {
      const errorData = await response.json();
      setMessageType("error");
      setMessage(`Error: ${errorData.message}`);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white border-gray-200 dark:bg-gray-600 dark:border-gray-700 z-10">
        <div className="max-w-screen-xl flex lg:flex-col flex-wrap items-center justify-between mx-auto p-4">
          <div className="w-full flex justify-center items-center">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse pb-4">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sketcherwell</span>
            </a>
            <div className="hidden md:flex absolute right-4">
              <button onClick={openModal} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Subscribe / Login
              </button>
            </div>

            <button
              type="button"
              className="absolute right-4 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-dropdown"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}>
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          <div className={`w-full md:block md:w-auto ${isMobileMenuOpen ? '' : 'hidden'}`} id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-600 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  // onClick={() => handleMenuItemClick('/')}
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${activeMenuItem === '/' ? 'text-blue-700 md:text-blue-700 dark:text-blue-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent'}`}
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  to="/gallery"
                  // onClick={() => handleMenuItemClick('/gallery')}
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${activeMenuItem === '/gallery' ? 'text-blue-700 md:text-blue-700 dark:text-blue-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent'}`}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  // onClick={() => handleMenuItemClick('/about')}
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${activeMenuItem === '/about' ? 'text-blue-700 md:text-blue-700 dark:text-blue-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent'}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/event"
                  // onClick={() => handleMenuItemClick('/event')}
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${activeMenuItem === '/event' ? 'text-blue-700 md:text-blue-700 dark:text-blue-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent'}`}
                >
                  Event
                </Link>
              </li>
              <li className="relative">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className={`flex items-center justify-between w-full py-2 px-3 rounded md:w-auto ${activeMenuItem.includes('/service') ? 'text-blue-700 md:text-blue-700 dark:text-blue-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent'}`}
                  onClick={toggleDropdown}
                >
                  Service
                  <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <div id="dropdownNavbar" className={`absolute left-0 top-full mt-2 z-10 ${isDropdownOpen ? '' : 'hidden'} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <Link
                        to="/service#sketch-drawing"
                        // onClick={() => handleMenuItemClick('/service#sketch-drawing')}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sketch Drawing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/service#digital-arts"
                        // onClick={() => handleMenuItemClick('/service#digital-arts')}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Digital Arts
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/service#wall-painting"
                        // onClick={() => handleMenuItemClick('/service#wall-painting')}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Wall Painting
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/service#oil-painting"
                        // onClick={() => handleMenuItemClick('/service#oil-painting')}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Oil Painting
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  to="/contact"
                  // onClick={() => handleMenuItemClick('/contact')}
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${activeMenuItem === '/contact' ? 'text-blue-700 md:text-blue-700 dark:text-blue-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent'}`}
                >
                  Contact
                </Link>
              </li>
              <li className="mt-4 md:hidden">
                <button onClick={openModal} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  Subscribe / Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {showModal && (
        <Modal.Container>
          <Modal.CardForm>
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="p-6 rounded-lg shadow-lg max-w-md w-full relative">
              <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={closeModal}>
                <IoCloseCircle className="w-6 h-6" />
              </button>
              <form onSubmit={handleSubmit(submit)}>
                <h2 className="text-xl font-semibold mb-4 text-blue-700">Subscribe to our Sketcherwell</h2>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    {...register('name', { required: true })}
                    type="text"
                    id="name"
                    className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    {...register('email', { required: true })}
                    type="email"
                    id="email"
                    className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  {loading ? "Submitting..." : "Subscribe"}
                </button>
                {message && <p className={`mt-2 text-sm ${messageType === "error" ? "text-red-500" : "text-green-500"}`}>{message}</p>}
              </form>
            </div>
          </div>
          </Modal.CardForm>
        </Modal.Container>
      )}
    </>
  );
};

export default Navbar;
