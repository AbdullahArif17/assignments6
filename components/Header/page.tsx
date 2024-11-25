import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Header() {
  return (
    <div className="border-b-2 bg-[#F7F7F7] border-[#676767]">
      <header className="w-full max-w-[1280px] h-[54px] px-[1px] flex items-center justify-between mx-auto">
        <div className="flex gap-[16px] items-center">
          <p className="h-[21px] font-[roboto] text-[14px] text-black font-semibold leading-[21px]">
            Phone Number: 956 742 455
          </p>
          <p className="text-black">|</p>
          <p className="h-[21px] font-[roboto] text-[14px] text-black font-semibold leading-[21px]">
            Email: info@ddsgnr.com
          </p>
        </div>

        <div className="flex gap-[16px] items-center">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-black text-[16px] hover:text-[#676767] transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-black text-[16px] hover:text-[#676767] transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-black text-[16px] hover:text-[#676767] transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-black text-[16px] hover:text-[#676767] transition" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
