import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import logoImg from "../../public/logo.png";

const Home: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://picsum.photos/v2/list?page=1&limit=5"
        );
        const data = await response.json();
        const imageUrls = data.map(
          (item: { download_url: string }) => item.download_url
        );
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  const [activeTab, setActiveTab] = useState<"cake" | "cookie">("cake");

  return (
    <section className="py-16 bg-[#fae3eb]">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Dobrodošli u Slatku Želju
        </h1>

        <p className="text-gray-700 text-center">Naši proizvodi</p>
        <Carousel className="w-1/2 mx-auto">
          <CarouselContent>
            {images.map((imageUrl, index) => (
              <CarouselItem key={index}>
                <img
                  src={imageUrl}
                  alt={`Image ${index}`}
                  className="w-full h-auto"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="mt-10 text-center bg-amber-50 py-10">
          <h2 className="text-2xl font-semibold mb-4">O Slatkoj Želji</h2>
          <p className="mb-6 text-muted-foreground mx-8">
            U Slatkoj Želji već više od 5 godina izrađujemo ukusne torte i
            kolače. Naša strast prema pečenju i predanost kvalitetnim sastojcima
            čine svaki zalogaj trenutkom za uživanje.
          </p>
          <Button asChild>
            <Link to="/about">ISTRAŽI VIŠE</Link>
          </Button>
        </div>
        <div className="p-4 mt-10 mx-8">
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => setActiveTab("cake")}
              className={`px-4 py-2 font-semibold rounded-md transition duration-300 w-1/2 ${
                activeTab === "cake"
                  ? "bg-amber-200"
                  : "bg-gray-100 text-gray-700 opacity-65 scale-90"
              }`}
            >
              Torte
            </button>
            <button
              onClick={() => setActiveTab("cookie")}
              className={`px-4 py-2 font-semibold rounded-md transition duration-300 w-1/2 ${
                activeTab === "cookie"
                  ? "bg-amber-200"
                  : "bg-gray-100 text-gray-700 opacity-65 scale-90"
              }`}
            >
              Kolači
            </button>
          </div>
          <div>
            {activeTab === "cake" ? (
              <div className="bg-gray-100 p-4 rounded-md">
                <h2 className=" font-bold text-lg mb-2">
                  Naše najprodavanije torte
                </h2>
                <ul className="list-disc list-inside ">
                  <li>Sacher torta</li>
                  <li>Dobos torta</li>
                  <li>Cheesecake</li>
                  <li>Torta Esterházy</li>
                  <li>Reforma torta</li>
                </ul>
              </div>
            ) : (
              <div className="bg-gray-100 p-4 rounded-md">
                <h2 className="font-bold text-lg mb-2">
                  Naši najprodavaniji kolači
                </h2>
                <ul className="list-disc list-inside">
                  <li>Mađarica</li>
                  <li>Vanilice</li>
                  <li>Krempita</li>
                  <li>Oblatne</li>
                  <li>Rozen kolač</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
