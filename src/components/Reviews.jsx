import { useRef, useState, useEffect } from "react";
import sleepIcon from "../assets/img/zzz.svg";
import Button from "./Button";

const reviewsData = [
  {
    name: "Jessica R.",
    title: "Best pillow I’ve ever had!",
    content:
      "Been sleeping on this little cloud for a month now and I LOVE it! It’s so so soft and makes me feel like a well rested baby. Thank you Pillows.com!",
  },
  {
    name: "Alex S.",
    title: "Finally found the perfect pillow!",
    content:
      "I was a skeptic until I laid my lovely head on this pillow. I was really shocked that the pillow kept its fluff this long. I love it and will be buying more.",
  },
  {
    name: "Stephanie L.",
    title: "Seriously THE best!",
    content:
      "These are the SOFTEST and coziest pillows ever! I have to get into bed fast before my dogs take them!",
  },
];

export default function Reviews() {
  const scrollRef = useRef(null);
  const [activePage, setActivePage] = useState(0);
  const [pagesCount, setPagesCount] = useState(1);

  const updatePages = () => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.querySelector("div")?.offsetWidth || 1;
    const containerWidth = container.offsetWidth;

    // Calculate how many cards fit in one "page"
    const cardsPerPage = Math.floor(containerWidth / cardWidth);
    const totalPages = Math.ceil(reviewsData.length / cardsPerPage);
    setPagesCount(totalPages);
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const containerWidth = container.offsetWidth;

    const currentPage = Math.round(scrollLeft / containerWidth);
    setActivePage(currentPage);
  };

  const scrollToPage = (pageIndex) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth * pageIndex;
    container.scrollTo({ left: scrollAmount, behavior: "smooth" });
  };

  useEffect(() => {
    updatePages();
    const container = scrollRef.current;
    container?.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updatePages);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updatePages);
    };
  }, []);

  return (
    <div className="mt-20 p-16 bg-[#EEF6FA]">
      <div className="flex flex-col items-center mb-6">
        <img src={sleepIcon} alt="icon" className="w-10 h-10 mb-2" />
        <p className="text-3xl font-bold text-[#1F3951]">Happy Sleepers.</p>
      </div>
      <p className="text-xl text-center text-[#1F3951] mb-6">
        With over <span className="font-bold">20,000 five-star reviews</span>,
        don’t take our word for it. Take theirs.
      </p>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-4 pb-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {reviewsData.map((review, index) => (
          <div
            key={index}
            className="min-w-full sm:min-w-[80%] md:min-w-[50%] lg:min-w-[33%] snap-start bg-white border rounded-lg shadow p-6 text-center"
          >
            <h3 className="text-lg font-semibold mb-1 text-[#1F3951]">
              {review.title}
            </h3>

            {/* ⭐ Yellow stars */}
            <div className="text-yellow-400 text-2xl mb-2">★★★★★</div>

            <p className="text-sm text-[#406C93] mb-2">— {review.name}</p>
            <p className="text-[#122230]">{review.content}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: pagesCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToPage(index)}
            className={`w-3 h-3 rounded-full ${
              activePage === index ? "bg-[#406C93]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        <Button
          text="Read all reviews"
          txtColor="#406C93"
          borderColor="#406C93"
          hoverBgColor="#406C93"
          hoverTxtColor="#FFFF"
        />
      </div>
    </div>
  );
}
