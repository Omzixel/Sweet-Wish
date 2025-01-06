import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About: React.FC = () => {
  return (
    <div>
      <div
        className="bg-cover h-64 sm:h-64 lg:h-96 mb-5"
        style={{
          backgroundImage:
            'url("https://hips.hearstapps.com/hmg-prod/images/chocolate-cake-index-64b83bce2df26.jpg?crop=0.6668359143606668xw:1xh;center,top&resize=1200:*")',
        }}
        aria-label="Hero section with studio name"
      ></div>

      <div className="mx-auto px-4 py-8 max-w-5xl">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">
          Slatka Želja
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <img
            src="https://media.houseandgarden.co.uk/photos/61893f4cb028fc86ce48802d/3:2/w_660,h_440,c_limit/apr-10_simple-vanilla-cake_b.jpg"
            alt="Slatka Želja"
            className="rounded-lg shadow-lg w-full"
          />

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Naša priča
            </h2>
            <p className="text-muted-foreground mb-4">
              Dobrodošli u pekaru Slatku Želju, gdje se strast susreće sa
              savršenstvom u svakom zalogaju. Od 2010. godine izrađujemo ukusne
              torte i kolače koji donose radost našoj lokalnoj zajednici. Naša
              predanost kvalitetnim sastojcima i starim receptima učinila nas je
              omiljenim mjestom u susjedstvu
            </p>
          </div>
        </div>

        <div className="p-6 rounded-lg mb-12 bg-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Naše vrijednosti
          </h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Korištenje visokokvalitetnih sastojaka lokalnog porijekla</li>
            <li>Posvećenost tradicionalnim metodama pečenja</li>
            <li>Personalizirana usluga i posvećenost detaljima</li>
            <li>Podrška našoj lokalnoj zajednici kroz razne inicijative</li>
          </ul>
        </div>

        <div className="text-center p-6 rounded-lg mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Posjetite nas danas!
          </h2>
          <p className="text-muted-foreground mb-6 sm:w-full lg:w-2/3 mx-auto">
            Dođite osjetiti toplinu i miris svježe pečenih proizvoda u Slatkoj
            Želji. Voljeli bismo biti dio vašeg slavlja i svakodnevnih
            trenutaka.
          </p>
          <Button asChild>
            <Link to="/contact">KONTAKT</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
