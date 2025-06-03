import strechImg from "../assets/img/strech.jpeg";
import badgeIcon from "../assets/img/badge.svg";
import hotel1 from "../assets/img/hotel1.png";
import Button from "./Button";

export default function Hotel() {
  const brands = [
    "Marriott®",
    "Hilton®",
    "Hampton Inn®",
    "Four Seasons®",
    "Ritz-Carlton®",
    "Holiday Inn®",
    "Comfort Inn®",
  ];
  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-8 mt-6 p-2 relative">
        <div className="w-full md:w-2/5">
          <img
            src={strechImg}
            alt="woman stretching"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className=" w-full md:w-3/5 text-[#1F3951] text-base">
          <p className="text-lg text-[#406C93] italic font-semibold font-[Bodoni-Moda]">
            Featured Hotel Bedding
          </p>
          <p className="text-3xl text-[#1F3951] font-bold">
            Holiday Inn Hotel & Resorts®
          </p>

          <div className="absolute top-0 right-1 md:-top-5 md:-right-5 lg:top-0 lg:right-1">
            <img
              src={badgeIcon}
              alt="badge icon"
              className="md:w-2/4 lg:w-full"
            />
          </div>

          {/* 2 images */}
          <div className="flex flex-col gap-2 w-full md:flex-row mt-6 md:mt-12">
            {/* First image with 5% OFF */}
            <div className="relative w-full md:w-1/2 h-full mb-2">
              <span className="absolute top-2 left-2 bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded">
                5% OFF
              </span>
              <img
                src={hotel1}
                alt=""
                className="w-full h-full object-cover rounded cursor-pointer"
              />
              <div>
                <p className="text-[#122230] font-bold">
                  Soft and Firm Combo Pack (Includes 2 Pillows)
                </p>
                <p className="uppercase text-[#646F78] -tracking-tight">
                  SOFT AND FIRM SUPPORT
                </p>
                <p className="text-red-500 font-semibold">From $132.98</p>
              </div>
            </div>

            {/* Second image with BACK IN STOCK */}
            <div className="relative w-full md:w-1/2 h-full">
              <span className="absolute top-2 left-2 bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded">
                BACK IN STOCK!
              </span>
              <img
                src={hotel1}
                alt=""
                className="w-full h-full object-cover rounded cursor-pointer"
              />
              <div>
                <p className="text-[#122230] font-bold">
                  Holiday Inn ® Touch of Down ® Soft Support Pillow
                </p>
                <p className="uppercase text-[#646F78] -tracking-tight">
                  SOFT SUPPORT
                </p>
                <p className="text-[#1F3951] font-semibold">From $69.99</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              text="SHOP ALL HOLIDAY INN® BEDDING"
              txtColor="#406C93"
              borderColor="#406C93"
              hoverTxtColor="#FFFFFF"
              hoverBgColor="#406C93"
            />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <p className="flex justify-center text-[#406C93] uppercase tracking-wider font-semibold text-lg text-center font-[DM-Sans]">
          SHOP BEDDING FROM OTHER TOP HOTEL BRANDS
        </p>
      </div>
      <div className="flex flex-row flex-wrap gap-6 mt-6 justify-center">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer p-6 rounded-sm"
            style={{ boxShadow: "0px 14px 40px #0000000F" }}
          >
            <p className="text-[#122230] font-semibold">{brand}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center underline uppercase mt-6 tracking-wider text-[#1F3951] font-[DM-Sans] cursor-pointer hover:text-[#406C93]">
        SEE ALL HOTEL BRANDS
      </div>
    </>
  );
}
