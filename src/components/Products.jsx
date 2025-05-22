import Pillow1 from "../assets/img/pillow1.png";
import Pillow2 from "../assets/img/pillow2.png";
import Pillow3 from "../assets/img/pillow3.jpg";
import Pillow4 from "../assets/img/pillow4.jpg";

export default function Products() {
  const pillowData = [
    {
      id: 1,
      name: "Down Dreams ® Classic Firm Pillow",
      description: "Medium support",
      price: "$74.99",
      image: Pillow1,
    },
    {
      id: 2,
      name: "Down Dreams ® Classic Soft Pillow",
      description: "Soft support",
      price: "$69.99",
      image: Pillow2,
    },
    {
      id: 3,
      name: "Holiday Inn Express ® Soft Support Pillow",
      description: "Soft support",
      price: "$62.99",
      image: Pillow3,
    },
    {
      id: 4,
      name: "Down Alternative Eco Standard Pillow",
      description: "Medium support",
      price: "$44.99",
      image: Pillow4,
    },
  ];

  return (
    <>
      <div className="mt-8">
        <p className="flex justify-center text-[#406C93] text-lg italic font-[Bodoni-Moda] font-semibold">
          Find the perfect pillow for you.
        </p>
        <p className="mt-1 flex justify-center text-center text-3xl text-[#1F3951] font-bold tracking-wider">
          What kind of sleeper are you?
        </p>
        <div className="flex flex-wrap justify-center gap-12 mb-6 mt-6 font-thin">
          {[
            "Back sleeper",
            "Side sleeper",
            "Stomach sleeper",
            "All position sleeper",
          ].map((type) => (
            <a
              key={type}
              href="#"
              className="text-sm font-medium text-[#406C93] hover:underline"
            >
              {type}
            </a>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {pillowData.map((pillow, index) => (
            <div key={index} className="flex flex-col items-center w-48">
              <img
                src={pillow.image}
                alt="pillow product"
                className="w-auto h-60 object-cover cursor-pointer"
              />
              <div>
                <p className="p-1 text-[#122230] font-semibold hover:underline cursor-pointer">
                  {pillow.name}
                </p>
                <p className="p-1 text-[#646F78]">{pillow.description}</p>
                <p className="p-1 text-[#1F3951]">{pillow.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button className="md:text-md p-2 rounded-md text-sm text-black bg-[rgb(64,108,147,0.24)] hover:bg-gray-800 hover:text-[#406C93] transition uppercase border font-bold border-[#406C93]">
            SHOP ALL BACK SLEEPER PILLOWS
          </button>
        </div>
      </div>
    </>
  );
}
