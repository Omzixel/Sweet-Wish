import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LuCake } from "react-icons/lu";
import { LuCookie } from "react-icons/lu";
import { SlPresent } from "react-icons/sl";
import { CiCalendar } from "react-icons/ci";

const Services: React.FC = () => {
  const services = [
    {
      title: "Torte po narudžbi",
      description:
        "Ukusne, lijepo dekorirane torte za rođendane, svadbe i sve posebne prigode. Svaka torta je prilagođena vašim željama i s puno pažnje biramo samo najkvalitetnije sastojke.",
      icon: <LuCake size={30} />,
    },
    {
      title: "Gurmanski kolačići",
      description:
        "Svježe pečeni kolačići u raznim okusima, idealni za poklone ili uživanje uz kafu. Od klasičnih čokoladnih do sezonskih specijaliteta, svaki kolačić je prava poslastica.",
      icon: <LuCookie size={30} />,
    },
    {
      title: "Poslastice za posebne prigode",
      description:
        "Cupcakesi, kolači i slastice prilagođeni za praznike, vjenčanja, i slavlja. Naša poslastičarnica unosi dašak umjetnosti u svaku kreaciju, čineći vaše trenutke posebnima.",
      icon: <SlPresent size={30} />,
    },
    {
      title: "Sezonske ponude",
      description:
        "Jedinstvene, vremenski ograničene kreacije koje slave okuse svake sezone. Iskoristite priliku i probajte naše specijalitete dostupne samo u određenim periodima godine.",
      icon: <CiCalendar size={30} />,
    },
  ];

  return (
    <section className="">
      <div
        className="bg-cover h-96 mb-5"
        style={{
          backgroundImage:
            'url("https://nakedcakes.sg/wp-content/uploads/2015/03/cake-service-03.jpg")',
        }}
        aria-label="Hero section with studio name"
      ></div>

      <h1 className="text-4xl font-bold text-center mb-8">Slatka Želja</h1>

      <p className="text-xl text-center text-slate-600 mx-36">
        Otkrijte svijet naše pekarske stručnosti i uživajte u ručno izrađenim
        poslasticama koje su savršena kombinacija okusa, kvalitete i estetike.
        Svaka kreacija dolazi iz pažljivo biranih sastojaka s ciljem da vaši
        posebni trenuci budu još slađi.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mx-24">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col border rounded-md p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <div>
              <div className="justify-center flex mt-2">{service.icon}</div>
              <div className="text-center text-lg font-bold mt-2">
                {service.title}
              </div>
            </div>
            <div className="mt-5 text-center">
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Spremni za naručiti?</h2>
        <p className="mb-6 text-muted-foreground mx-8">
          Kontaktirajte nas već danas kako bismo razgovarali o vašim potrebama
          za pečenjem. Naše ljubazno osoblje rado će vam pomoći u odabiru
          savršene torte, kolača ili poslastice za svaku prigodu.
        </p>
        <Button asChild>
          <Link to="/contact">KONTAKT</Link>
        </Button>
      </div>
    </section>
  );
};

export default Services;
