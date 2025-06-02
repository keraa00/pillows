import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
  FaGoogle,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#EDF4FA] px-4 py-10 mt-4 text-[#1F3951] text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* CUSTOMER CARE */}
        <div>
          <h3 className="font-bold mb-2">CUSTOMER CARE</h3>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            sleepbetter@pillows.com
          </p>
          <p>
            <span className="font-semibold">Call:</span> 1-800-720-6973{" "}
            <span className="text-xs">(M–F 8am–4pm EST)</span>
          </p>
          <p>
            <span className="font-semibold">Text:</span> 1-800-000-0000
          </p>
          <ul className="mt-2 space-y-1">
            <li>Customer Service</li>
            <li>Track My Order</li>
            <li>Returns & Exchanges</li>
            <li>Shipping Information</li>
            <li>FAQs</li>
            <li>International Orders</li>
            <li>Gift Certificates</li>
          </ul>
        </div>

        {/* ABOUT US */}
        <div>
          <h3 className="font-bold mb-2">ABOUT US</h3>
          <ul className="space-y-1">
            <li>Our Story</li>
            <li>Reviews</li>
            <li>Blog</li>
            <li>Satisfaction Guarantee</li>
            <li>Why Shop with Us</li>
            <li>Staff Picks</li>
            <li>Pillow Finder</li>
          </ul>
        </div>

        {/* PARTNER */}
        <div>
          <h3 className="font-bold mb-2">PARTNER</h3>
          <ul className="space-y-1">
            <li>Wholesale</li>
            <li>Affiliates</li>
            <li>Become a Vendor</li>
            <li>PR</li>
          </ul>
        </div>

        {/* PILLOW TALK + SOCIALS */}
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-bold mb-2">Pillow Talk.</h3>
          <p className="mb-4">
            You’re going to want in. Sign up to stay up-to-date on the latest
            news, product releases and exclusive deals!
          </p>
          <div className="flex mb-6">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-2 rounded-l w-full"
            />
            <button className="bg-[#406C93] text-white px-4 py-2 rounded-r">
              SIGN UP
            </button>
          </div>
          <h4 className="font-bold mb-2">Let’s Be Friends</h4>
          <div className="flex space-x-3 text-[#1F3951] text-lg">
            <FaFacebookF />
            <FaInstagram />
            <FaPinterestP />
            <FaTwitter />
            <FaYoutube />
            <FaGoogle />
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="max-w-7xl mx-auto text-center text-xs mt-10 border-t pt-4 flex flex-col md:flex-row justify-center gap-4">
        <p>© Pillows.com All Rights Reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p>Coupon Policy</p>
        <p>Safe & Secure Shopping</p>
      </div>
    </footer>
  );
};

export default Footer;
