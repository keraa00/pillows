import finderPillow from "../assets/img/finder-pillow.png";

export default function Finder() {
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
          <button className="md:text-md p-4 mt-6 rounded-md text-sm lg:text-md text-[#406C93] bg-[#FFFFFF] hover:bg-gray-800 hover:text-[#406C93] transition uppercase border font-semibold border-[#406C93] tracking-widest">
            Let's get started
          </button>
        </div>
      </div>
    </>
  );
}
