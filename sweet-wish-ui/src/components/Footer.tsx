import React from "react";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";

const Footer: React.FC = () => {
  return (
    <footer className="bg-pink-50 text-pink-900 py-8 px-4 md:px-6 mt-5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-xl font-bold">Slatka Želja</h2>
            </div>
            <p>Ulica Bračka 3</p>
            <p>31400, Đakovo</p>
            <p>Phone: 097 747 7166</p>
            <p>Email: zeljka@lozic69@gmail.com</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <h3 className="text-lg font-semibold">
              Zaprati nas na našim društvenim mrežama
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/p/Slatka-%C5%BDelja-100063583868326/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CiFacebook size={30} />
              </a>
              <a
                href="https://www.instagram.com/slatka_zelja/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoInstagram size={30} />
              </a>
            </div>
            <p className="text-sm mt-2">Pon-Pet, 08:00 - 16:00</p>
            <p className="text-sm">Zatvoreni subotom i nedjeljom</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-pink-700">
          <p>
            &copy; {new Date().getFullYear()} Slatka Želja. Sva prava pridržana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
