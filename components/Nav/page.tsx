import Image from "next/image";

export default function Nav() {
  return (
    <div className="relative flex items-center h-[72px] bg-[#F7F7F7] mt-[17px] border border-[#676767] px-4">
      <div className="relative ml-[60px]">
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
      </div>
      <h1 className="ml-2 text-black font-[Inter] text-[25px] font-bold leading-[30px]">
        Ddsgnr
      </h1>
      <div className="w-[1152px] h-[44px] gap-[32px] flex justify-between items-center  border-black ml-[170px] bg-white ">
        <ul className="flex flex-row ml-6 justify-center items-center p-2 gap-[70px] font-roboto text-base text-black font-bold leading-6 text-center">
          <li>Home</li>
          <li>Courses</li>
          <li>Services</li>
          <li>Achievement</li>
          <li>About Us</li>
          <li>Testimonial</li>
          <button className="w-[80px] h-[40px] border border-black rounded flex items-center justify-center text-black cursor-pointer">
            Login
          </button>
          <button className="w-[132px] p-0 m-0 h-[40px] bg-black rounded text-white flex items-center justify-center cursor-pointer">
            Sign Up
          </button>
        </ul>
      </div>
    </div>
  );
}
