function Dummy() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-green-500 text-white py-6 px-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-2xl">BrandName</div>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-blue-500 text-white text-center py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Service</h1>
          <p className="text-lg mb-6">We offer amazing services that make your life easier. Join us today!</p>
          {/* Uncomment and add your image */}
          {/* <img src="your-image-url.jpg" alt="Hero Image" className="mx-auto w-1/2" /> */}
          <button className="bg-yellow-400 text-gray-800 py-2 px-6 rounded-lg hover:bg-yellow-300 mt-6">Get Started</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-lg mb-6">
            We are a team of professionals committed to delivering the best services for our clients. Our goal is to make your experience seamless and delightful.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="mt-4">To provide top-notch services to make your life simpler and more enjoyable.</p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Our Vision</h3>
              <p className="mt-4">We envision a world where technology and innovation work together to improve lives.</p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Our Values</h3>
              <p className="mt-4">We value integrity, commitment, and excellence in everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-200 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg mb-6">Feel free to reach out to us for any inquiries or questions. We are here to help!</p>
          <div className="max-w-md mx-auto">
            <form className="bg-white shadow-lg p-6 rounded-lg">
              <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 border border-gray-300 rounded-lg" />
              <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 border border-gray-300 rounded-lg" />
              <textarea placeholder="Your Message" className="w-full p-3 mb-4 border border-gray-300 rounded-lg" rows={4}></textarea>
              <button type="submit" className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-400">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-green-500 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 BrandName. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Dummy;
