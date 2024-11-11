import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Projectbtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/research"
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src="/rounded-2.png"
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        />
        <ArrowRight className="absolute text-4xl transform transition-transform duration-300 group-hover:translate-x-2" />
      </Link>
    </div>
  );
};

export default Projectbtn;
