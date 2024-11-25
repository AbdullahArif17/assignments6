import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="m-24 space-y-6 p-24">
        <h1 className="text-black font-roboto text-5xl font-bold leading-tight text-left max-w-lg">
          Learn new skills online with ease
        </h1>
        <p className="text-black font-roboto text-lg font-normal leading-7 text-left max-w-lg">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
        <div className="flex space-x-4">
          <button className="bg-black p-3 font-roboto text-base font-medium rounded border border-black text-white">
            Start learning now
          </button>
          <button className="bg-white p-3 font-roboto text-base font-medium rounded border border-black text-black">
            Explore Courses
          </button>
        </div>
      </div>
      <div className="flex">
        <Image
          src={"/image.svg"}
          alt={"Illustration of learning courses"}
          width={640}
          height={900}
        />
      </div>
    </div>
  );
}
