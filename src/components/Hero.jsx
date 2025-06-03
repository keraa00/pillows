import heroImg from "../assets/img/landing.png";
import deliveryImg from "../assets/img/delivery.svg";
import bedImg from "../assets/img/bed.svg";
import returnImg from "../assets/img/return.svg";
import priceImg from "../assets/img/price.svg";
import Button from "./Button";

export default function Hero2() {
  const features = [
    { text: "30 Day Sleep Better Guarantee", icon: bedImg },
    { text: "Fastest Delivery", icon: deliveryImg },
    { text: "Free Returns & Exchanges", icon: returnImg },
    { text: "Low Price Guarantee", icon: priceImg },
  ];

  return (
    <>
      <div
        className="relative h-[90vh] w-full bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Text Content */}
        <div className="w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-2xl px-4 sm:px-8 md:px-12 text-white">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2"
            style={{ color: "#1F3951" }}
          >
            Shop Hotel Pillows
          </h1>

          <p
            className="sm:text-xl md:text-2xl mb-2 text-sm sm:text-base italic font-semibold font-[Bodoni-Moda]"
            style={{ color: "#406C93" }}
          >
            Experience hotel relaxation in the comfort of your home.
          </p>
          <p
            className="sm:text-lg md:text-lg mb-4 text-sm sm:text-base font-sem"
            style={{ color: "#122230" }}
          >
            Bring the same bedding featured in your favorite hotel or resort to
            your home. Find your favorite pillow from the most popular hotel
            chains: Marriott®, Hampton Inn®, Hilton®, Four Seasons®,
            Ritz-Carlton®, and so much more!
          </p>
          <div className="flex flex-col sm:flex-row gap-0 md:gap-8 w-full -mb-16">
            <Button
              text="Shop Hotel Pillows"
              txtColor="#406C93"
              borderColor="#406C93"
              hoverBgColor="#406C93"
              hoverTxtColor="#FFFF"
              className="-mb-2 md:mb-0"
            />

            <Button
              text="Find your dream pillow"
              txtColor="#406C93"
              borderColor="#406C93"
              hoverBgColor="#406C93"
              hoverTxtColor="#FFFF"
              className="font-extrabold"
            />
          </div>
        </div>
      </div>

      <div className="p-4 md:p-8 sm:px-8 md:px-16 mt-4 bg-[#F9F7F6] md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-x-4 gap-y-3 text-[#1F3951] text-sm sm:text-base">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 justify-center w-full md:w-auto"
            >
              <img
                src={feature.icon}
                alt="feature"
                className="w-6 h-6 object-contain"
              />
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
