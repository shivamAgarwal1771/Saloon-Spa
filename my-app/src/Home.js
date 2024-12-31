import React, { useState, useEffect } from 'react';
import './Home.css';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter, FaBars } from 'react-icons/fa'; // Import necessary icons

function Home() {
    const images = [
        '/pictures/image1.jpg',
        '/pictures/image2.jpg',
        '/pictures/image3.jpg',
        '/pictures/image4.jpg',
        '/pictures/image5.jpg',
        '/pictures/image6.jpg',
        '/pictures/image7.jpg'
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const [isSliderOpen, setIsSliderOpen] = useState(false); // State to control slider visibility

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const toggleSlider = () => {
        setIsSliderOpen(!isSliderOpen);
    };

    return (
        <div className="app-container">
            <header className="header">
                <nav className="nav">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#location">Location</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#qna">QNA</a></li>
                    </ul>
                </nav>
                <div className="logo">ANGELIC SALON & SPA</div>
                <div className="right-menu">
                    <a href="#membership">Memberships</a>
                    <a href="#book-now" className="book-now">Book Now</a>
                    {/* Hamburger Menu Icon */}
                    <div className="menu-icon" onClick={toggleSlider}>
                        <FaBars size={30} />
                    </div>
                </div>


            </header>

            {/* Slider Menu */}
            <div className={`slider ${isSliderOpen ? 'open' : ''}`}>
                <ul className="slider-menu">
                    <li><a href="#profile">Profile</a></li>
                    <li><a href="#settings">Settings</a></li>
                    <li><a href="#logout">Logout</a></li>
                </ul>
            </div>

            <main className="main">
                <section className="hero">
                    <div className="image-container">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`slideshow ${index}`}
                                className={`fade-image ${index === currentImage ? 'active' : ''}`}
                            />
                        ))}
                    </div>
                </section>

                <div className="details-section">
                    <div className="content">
                        {/* Social Media Links */}
                        <div className="social-media-links">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={30} />
                            </a>
                            <a href="https://www.instagram.com/unlaxangelic" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={30} />
                            </a>
                            <a href="https://wa.me/917464927777" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp size={30} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={30} />
                            </a>
                        </div>

                        <p>Experience luxury wellness at Unlax Spa today.</p>

                        <div className="location-info">
                            <p><strong>First Branch:</strong> Angelic unisex salon and spa, 3rd floor, hotel k11 building, kasturi Tower, panchakki, Haldwani 263139</p>
                            <p><strong>Second Branch:</strong> Om sai tower, 2nd floor, Near kurmanchal bank uncha pul, haldwani 263139</p>
                        </div>

                        <div className="contact-info">
                            <p><strong>©2021, Adgroovs.com</strong></p>
                            <p><strong>INDULGENCE</strong></p>
                            <p><strong>Q Search</strong></p>
                            <p><strong>Phone:</strong> +91-7464927777</p>
                            <p><strong>Email:</strong> <a href="mailto:contactus@unlaxspa.com">contactus@unlaxspa.com</a></p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;
