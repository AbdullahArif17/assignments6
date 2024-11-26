import Image from "next/image";

export default function Nav() {
  return (
    <div className="relative flex items-center h-[72px] bg-[#F7F7F7] md:mt-[0px] lg:mt-[17px] border border-[#676767] px-4">
      {/* Logo and Icons */}
      <div className="relative flex items-center ml-4 sm:ml-[60px]">
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
        <h1 className="ml-2 text-black font-[Inter] text-[20px] sm:text-[25px] font-bold leading-[30px]">
          Ddsgnr
        </h1>
      </div>

      {/* Navigation Menu */}
      <div className="hidden md:flex w-full ml-[170px] h-[44px] gap-[32px] justify-between items-center border-black bg-white">
        <ul className="flex flex-row ml-6 justify-center items-center p-2 gap-[30px] lg:gap-[90px] font-roboto text-sm lg:text-base text-black font-bold leading-6 text-center">
          <li>Home</li>
          <li>Courses</li>
          <li>Services</li>
          <li>Achievement</li>
          <li>About Us</li>
          <li>Testimonial</li>
        </ul>
        <div className="flex gap-4">
          <button className="w-[80px] h-[40px] border border-black rounded flex items-center justify-center text-black cursor-pointer">
            Login
          </button>
          <button className="w-[132px] h-[40px] bg-black rounded text-white flex items-center justify-center cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden font-semibold ml-[400px]">
        <button className="text-black">
          {/* Replace with an icon for the hamburger menu if needed */}
          ☰
        </button>
      </div>
    </div>
  );
}
