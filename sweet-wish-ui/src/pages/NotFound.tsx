import React from "react";
import { FaHome, FaBirthdayCake } from "react-icons/fa";

const NotFound: React.FC = () => {
  return (
    <section>
      <div className="flex py-24 flex-col items-center justify-center bg-pink-50">
        <div className="text-center">
          <FaBirthdayCake className="mx-auto text-pink-500 mb-4" size={64} />
          <h1 className="text-4xl font-bold text-pink-700">
            404 - Stranica nije pronađena
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            O ne! Čini se da je ova stranica odnesena.
          </p>

          <div className="mt-6">
            <button
              className="mx-auto flex items-center bg-pink-500 text-white hover:bg-pink-600 px-4 py-2 rounded-lg"
              onClick={() => (window.location.href = "/")}
            >
              <FaHome className="mr-2" size={20} /> Nazad na početnu
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 text-gray-500 text-sm">
          <p>Možda probajte komad torte dok se snađete? 🍰</p>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
