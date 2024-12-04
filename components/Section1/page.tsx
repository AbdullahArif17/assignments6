import Image from "next/image";

export default function SecOne() {
  return (
    <div className="flex flex-col justify-center items-center h-auto w-full py-6">
      <div className="m-4 w-[327px] text-left">
        <p className="font-roboto text-black text-[18px] font-bold leading-[27px]">
          Trusted by the world's best companies 
          <span > [Social proof to build credibility]</span>
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6">
        {[...Array(6)].map((_, index) => (
          <Image
            key={index}
            src="/Image.svg"
            alt={`Logo ${index + 1}`}
            height={33.34}
            width={37.15}
            className="object-contain"
          />
        ))}
      </div>
    </div>
  );
}
