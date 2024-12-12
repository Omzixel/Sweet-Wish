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

  return (
    <section className="py-16 bg-[#fae3eb]">
      <div className="container mx-auto ">
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
        <div className="mt-16 text-center">
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
      </div>
    </section>
  );
};

export default Home;
