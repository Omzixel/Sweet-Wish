
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16 bg-[#fae3eb] flex items-center justify-center">
    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
            <img className="rounded-lg w-full"
                 src="https://i.ibb.co/6NDwF7d/413979415-856362963159825-8024410639689083445-n.jpg"
                 alt="413979415-856362963159825-8024410639689083445-n"
                 />
        </div>
        <div className="w-full md:w-1/2 pl-0 md:pl-8">
            <h1 className="text-4xl font-bold mb-8">About Page</h1>
            <div className="text-gray-700 p-8">
                <p className="mb-4">
                    Dobrodošli u <span className="font-bold">Slatka Želju</span> - mjesto gdje se ostvaruju vaše najslađe želje!
                </p>
                <p className="mb-4">
                    Naša priča započinje s strašću prema slastičarstvu i ljubavlju prema stvaranju savršenih okusa.
                    <span className="font-bold">Slatka Želja</span> je obiteljska tvrtka posvećena proizvodnji vrhunskih kolača
                    i torti koje će zadovoljiti sva vaša nepca.
                </p>
                <p className="mb-4">
                    Kroz pažljiv odabir najkvalitetnijih sastojaka, naši majstori slastica svakodnevno stvaraju čaroliju koja će
                    oduševiti vaše nepce i pružiti vam nezaboravno iskustvo uživanja u slatkim delicijama.
                    Posebnu pažnju posvećujemo detaljima i estetici, kako bismo svaki kolač ili tortu pretvorili u pravo malo umjetničko djelo.
                </p>
                <p className="mb-4">
                    Bez obzira trebate li slatkiš za posebnu prigodu, slavlje ili jednostavno želite uživati u trenutku
                    slatke radosti, <span className="font-bold">Slatka Želja</span> je tu da ispuni vaše najslađe želje.
                </p>
                <p>
                    Radujemo se što ćemo vas povesti na put slatkog užitka i dijeliti s vama radost stvaranja nezaboravnih
                    slatkih trenutaka. Hvala vam što ste dio <span className="font-bold">Slatke Želje</span>!
                </p>
            </div>

        </div>
    </div>
</section>
  );
};

export default About;
