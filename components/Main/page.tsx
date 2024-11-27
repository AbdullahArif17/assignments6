import Image from "next/image";

export default function Page() {
  return (
    <div className="flex md:flex-row flex-col items-center md:justify-between justify-center">
      <div className="md:m-24 space-y-6 md:p-24">
        <h1 className="text-black font-roboto text-5xl font-bold leading-tight mt-12 p-4 text-left max-w-lg">
          Learn new skills online with ease
        </h1>
        <p className="text-black font-roboto text-lg font-normal leading-7 text-left max-w-lg">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
        <div className="flex justify-center m-2 p-2 gap-4 md:justify-start space-x-6 md:space-x-4">
          <button className="bg-black md:p-3 p-2 w-[178px] h-[48px] font-roboto text-base font-medium rounded border border-black text-white">
            Start learning now
          </button>
          <button className="bg-white md:p-3 w-[178px] h-[48px] p-2 font-roboto text-base font-medium rounded border border-black text-black">
            Explore Courses
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src={"/image.svg"}
          alt={"Illustration of learning courses"}
          width={428}
          height={390}
          className="sm:w-full md:h-[900px]"
        />
      </div>
    </div>
  );
}
