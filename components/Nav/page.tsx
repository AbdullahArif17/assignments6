import Image from "next/image";

export default function Nav() {
  return (
    <div className="relative flex items-center lg:mt-5 w-full h-[72px] bg-[#F7F7F7] border border-[#676767]">
      {/* Logo Section */}
      <div className="relative flex items-center ml-4 sm:ml-[20px]">
        <Image
          src="/Union1.jpg"
          alt="Icon 1"
          height={26}
          width={26}
          className="bottom-1"
        />
        <Image
          src="/Union.jpg"
          alt="Icon 2"
          height={26}
          width={26}
          className="top-2 left-2"
        />
        <h1 className="ml-2 text-black font-[Inter] text-[18px] sm:text-[20px] font-bold leading-[24px]">
          Ddsgnr
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex ml-16 p-2 flex-grow h-[44px] justify-center items-center bg-white">
        <ul className="flex flex-row gap-[16px] sm:gap-[30px] lg:gap-[110px] ml-4 font-roboto text-sm lg:text-base text-black font-bold leading-6 text-center">
          <li>Home</li>
          <li>Courses</li>
          <li>Services</li>
          <li>Achievement</li>
          <li>About Us</li>
          <li>Testimonial</li>
        </ul>
        <div className="flex gap-2 sm:gap-4 ml-auto mr-4">
          <button className="w-[70px] sm:w-[80px] h-[36px] border border-black rounded flex items-center justify-center text-black cursor-pointer text-sm">
            Login
          </button>
          <button className="w-[110px] sm:w-[132px] h-[36px] bg-black rounded text-white flex items-center justify-center cursor-pointer text-sm">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="flex md:hidden ml-auto mr-4">
        <button className="text-black text-2xl font-semibold">☰</button>
      </div>
    </div>
  );
}
