export default function Home() {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500 py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Top Quality Digital Product to Explore
          </h1>
          <p className="mt-4 text-gray-700">
            A complete about-face in its core economy Amsterdam.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="bg-white border text-black border-gray-300 px-6 py-2 rounded-full hover:bg-gray-100 transition">
              How it works?
            </button>
          </div>
          <img
            src="foto.avif"
            alt="Hero"
            className="mt-12 w-full max-w-2xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-20 px-6 text-center bg-white">
        <h3 className="text-sm font-semibold text-yellow-500">FEATURES</h3>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">Our Solutions</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {["red", "yellow", "green", "purple"].map((color, i) => (
            <div key={i} className={`p-6 rounded-lg shadow hover:shadow-md transition`}>
              <div className={`text-${color}-500 text-3xl mb-4`}>🔗</div>
              <h4 className="font-semibold text-gray-900">Expand Your Reach</h4>
              <p className="text-sm text-gray-600 mt-2">
                A complete about-face in its core economy Amsterdam.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Web Development Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-sm font-semibold text-blue-500">FEATURES</h3>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Web Development</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              This book is a treatise on the theory of ethics, very popular during the Renaissance. 
              The first line of Lorem Ipsum, “Lorem ipsum dolor sit amet..”, comes from a line in section 1.10.32.
            </p>
            <ul className="mt-6 space-y-2 text-left text-black">
              <li className="flex items-center gap-2">
                ✅ <span>UI & UX Design</span>
              </li>
              <li className="flex items-center gap-2">
                ✅ <span>Modern Frameworks</span>
              </li>
              <li className="flex items-center gap-2">
                ✅ <span>Responsive Layout</span>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-4 bg-white rounded-lg shadow text-center">
                <h4 className="font-bold text-gray-700">Reach</h4>
                <p className="text-xs text-gray-500">
                  A complete about-face in its core economy
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
