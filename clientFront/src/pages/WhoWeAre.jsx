import React from "react";

export default function WhoWeAre() {
  return (
    <div className="pt-32">
      <section className="w-full py-12 bg-rose-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our History
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              In 1965, Isabel Gomez opened the first Sparkle CarWash Shop 🫧 on
              Rota in Cadiz. This humble start marked the beginning of a legacy
              dedicated to quality car care and exceptional service. The
              original location, with its classic red and white stripes, still
              stands today as a testament to our enduring commitment to
              excellence.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800">
                A Step Back in Time
              </h3>
              <p className="mt-4 text-xl text-gray-600">Back in 1965...</p>
              <ul className="mt-4 text-xl text-gray-600 list-disc list-inside">
                <li>Isabel Gomez was the President.</li>
                <li>A car wash cost fifty cents.</li>
                <li>We did not sell our own product at the time</li>
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800">
                Growing with Time
              </h3>
              <p className="mt-4 text-xl text-gray-600">
                From Simple Beginnings to Modern Excellence
              </p>
              <p className="mt-4 text-xl text-gray-600">
                Since our first wash, we've expanded our services and locations,
                embracing both technological advancements and eco-friendly
                practices. What started as a single bay operation has grown into
                a network of state-of-the-art facilities, each designed to
                deliver superior car care with minimal environmental impact.
              </p>
              <p className="mt-4 text-xl text-gray-600">
                Today, we continue to uphold our founding principles of
                integrity, efficiency, and customer satisfaction. Our mission is
                to provide a clean, convenient, and eco-friendly car wash
                experience, ensuring that every vehicle receives the highest
                standard of care.
              </p>
              <p className="mt-4 text-xl text-gray-600">
                We are excited to see our community grow and evolve, and we
                invite you to visit one of our locations to experience the
                Sparkle Shine difference firsthand!
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2790/2790184.png"
              className="w-32 h-auto mb-4"
            />
            <p className="text-lg font-semibold mb-2">Contact Us</p>
            <p className="text-base mb-1">Rota, Cádiz</p>
            <p className="text-base mb-1">Phone: +34 123 456 789</p>
            <p className="text-base mb-4">Email: IsabelWash@washShop.com</p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                className="text-gray-400 hover:text-white"
              >
                Facebook
              </a>
              <a
                href="https://www.twitter.com"
                className="text-gray-400 hover:text-white"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com"
                className="text-gray-400 hover:text-white"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="mt-6 border-t border-gray-700 pt-4 text-center">
            <p className="text-sm text-gray-400">
              {new Date().getFullYear()} CarWash Shop. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
