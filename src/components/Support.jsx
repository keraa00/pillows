import img1 from "../assets/img/bedding-experts.svg";
import img2 from "../assets/img/satisfaction.svg";
import img3 from "../assets/img/exchange.svg";

export default function Support() {
  return (
    <>
      <div className="bg-[#F8F6F6] p-8 mt-16">
        <div className="flex justify-center font-[DM-Sans] text-[#1F3951] text-3xl font-semibold mb-6">
          {" "}
          We're here to help
        </div>

        <div className="flex flex-col md:flex-row p-2 gap-6 justify-between">
          <div className="font-[DM-Sans] text-[#1F3951]">
            <img src={img1} alt="bedding icon" className="mb-4" />
            <p className="font-semibold">Talk to Our Bedding Experts</p>
            <p>
              Looking for a particular pillow? Our expert staff can make a
              recommendation to meet your individual sleep needs.
            </p>
          </div>
          <div className="font-[DM-Sans] text-[#1F3951]">
            <img src={img2} alt="satisfaction icon" className="mb-4" />
            <p className="font-semibold">100% Satisfaction Guarantee</p>
            <p>
              If a product does not help you Sleep Better, our bedding experts
              can find you a product that will help you Sleep Better Guaranteed!
            </p>
          </div>
          <div className="font-[DM-Sans] text-[#1F3951]">
            <img src={img3} alt="exchange icon" className="mb-4" />
            <p className=" font-semibold">Free Exchanges & Returns</p>
            <p>
              You have up to 90 days to process 3 free shipping exchanges. We
              want you to find that perfect pillow!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
