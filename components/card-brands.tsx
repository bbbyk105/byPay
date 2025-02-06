import Image from "next/image";

const CardBrands = () => {
  const cardBrands = [
    { id: "visa", image: "/logos/visa.png", alt: "Visa", label: "visa" },
    {
      id: "mastercard",
      image: "/logos/master.png",
      alt: "master",
      label: "MC",
    },
    { id: "jcb", image: "/logos/jcb.png", alt: "JCB", label: "JCB" },
    { id: "amex", image: "/logos/amex.png", alt: "AMEX", label: "AMEX" },
  ];

  return (
    <div className="flex space-x-2">
      {cardBrands.map((brand) => (
        <div
          key={brand.id}
          className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-400"
        >
          {brand.image ? (
            <div className="relative w-full h-full">
              <Image
                src={brand.image}
                alt={brand.alt}
                fill
                className="object-contain p-1"
              />
            </div>
          ) : (
            brand.label
          )}
        </div>
      ))}
    </div>
  );
};

export default CardBrands;
