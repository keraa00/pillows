import finderPillow from "../assets/img/finder-pillow.png";
import finderImg1 from "../assets/img/finder1.png";
import finderImg2 from "../assets/img/finder2.png";
import finderImg3 from "../assets/img/finder3.png";
import Button from "./Button";

export default function Finder() {
  const finderImages = [
    { img: finderImg1, text: "Pillows" },
    { img: finderImg2, text: "Sheets & Duvet Covers" },
    { img: finderImg3, text: "Comforters" },
  ];
  return (
    <>
      <div
        className="relative h-[40vh] w-full bg-cover bg-center bg-no-repeat flex items-center mt-16"
        style={{ backgroundImage: `url(${finderPillow})` }}
      >
        <div className="p-2 max-w-md md:ml-auto md:mr-auto">
          <p className=" mt-2 text-[#406C93] font-[Bodoni-Moda] text-lg lg:text-xl italic font-semibold">
            Need help picking out a pillow?
          </p>
          <p className="mt-2 text-[#1F3951] text-3xl lg:text-4xl font-bold font-[DM-Sans]">
            Find the perfect pillow for you with our Pillow Finder.
          </p>

          <Button
            text="Let's get started"
            txtColor="#406C93"
            borderColor="#406C93"
            hoverBgColor="#406C93"
            hoverTxtColor="#FFFF"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-16">
        {finderImages.map((image, index) => (
          <div
            key={index}
            className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-64 cursor-pointer rounded overflow-hidden"
          >
            <img
              src={image.img}
              alt={`Finder ${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 left-2 px-2 py-1 rounded text-sm text-[#1F3951]">
              <p className="font-semibold">{image.text}</p>
              <p className="text-xs underline">Shop now</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
