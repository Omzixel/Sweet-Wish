import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <section>
      <div
        className="bg-cover h-64 sm:h-64 lg:h-96 mb-5"
        style={{
          backgroundImage:
            'url("https://hips.hearstapps.com/hmg-prod/images/chocolate-cake-index-64b83bce2df26.jpg?crop=0.6668359143606668xw:1xh;center,top&resize=1200:*")',
        }}
        aria-label="Hero section with studio name"
      ></div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
        {/* Contact Form */}
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Kontaktirajte nas
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-1"
              >
                Vaše ime:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-3 rounded focus:ring focus:ring-pink-200 focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                Vaša e-mail adresa:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-3 rounded focus:ring focus:ring-pink-200 focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-1"
              >
                Vaša poruka:
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border p-3 rounded focus:ring focus:ring-pink-200 focus:outline-none"
                rows={5}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-pink-500 text-white py-2 px-6 rounded hover:bg-pink-600 transition-all"
            >
              Pošalji
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="px-4">
          <h2 className="text-2xl font-bold mb-6">Kontakt informacije</h2>
          <div className="space-y-4">
            <p className="flex items-center text-lg">
              <CiMail className="mr-2 text-pink-500" />
              <span>Email: zeljka.lozic69@gmail.com</span>
            </p>
            <p className="flex items-center text-lg">
              <BsTelephone className="mr-2 text-pink-500" />
              <span>Mobitel: 097 737 7166</span>
            </p>
            <p className="flex items-center text-lg">
              <CiClock2 className="mr-2 text-pink-500" />
              <span>Radni dani: Pon-Pet, 08:00 - 16:00</span>
            </p>
            <p className="flex items-center text-lg">
              <IoLocationOutline className="mr-2 text-pink-500" />
              <span>Bračka 3, Đakovo, Hrvatska</span>
            </p>
          </div>

          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.9084952343278!2d18.40974836618898!3d45.32292607269567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x268b19eaf3f8b15d%3A0x6cefe475adf82c17!2sSlatka%20%C5%BDelja!5e0!3m2!1sen!2shr!4v1706719714324!5m2!1sen!2shr"
              className="w-full rounded-md shadow-lg aspect-video"
              loading="lazy"
              title="location"
              style={{ border: "0" }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
