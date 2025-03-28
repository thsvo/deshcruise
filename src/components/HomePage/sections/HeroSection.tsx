import Image from "next/image";
import ExclusivePlan from "@/components/HomePage/ExclusivePlan";


export default async function HeroSection({
  lg_screen_width,
  default_screen_width,
}: {
  lg_screen_width: string;
  default_screen_width: string;
}) {
  return (
    <div className="bg-black flex justify-center w-screen">
      <div
        className={`lg:min-h-[75vh] ${lg_screen_width} flex ${default_screen_width}`}
      >
        {/* <div
        className="bg-[url(/hero_background.jpg)] w-full aspect-[16/9] bg-no-repeat bg-center bg-contain opacity-50"
      ></div>*/}
        {/* Main Hero Section */}
        <div className=" lg:justify-between lg:top-1/3 lg:flex-row flex flex-col justify-center items-center w-full">
          {/* Launch Your Site */}
          <div className=" lg:w-[662px] flex flex-col lg:items-start text-white">
            <Image
              src="/dashcruise_logo_edited_w_280.webp"
              sizes="280px"
              width={280}
              height={280}
              alt="logo"
              priority
              fetchPriority="high"
              className="lg:mt-0 bg-blue-50 p-10 rounded-2xl mx-auto mt-5"
            />
            <div className="lg:text-7xl lg:leading-[90px] lg:text-start  my-5 text-4xl leading-12 tracking-[-2%] font-bold font-sans text-center">
              <h1>
                Launch Your Website With Our{" "}
                <span className="text-carrot-500">Exclusive </span>Offer
              </h1>
            </div>
            <p className="text-base leading-6 text-center break-words mb-2">
              We craft custom websites designed to bring your ideas to life and
              help you grow your business.
              <br />
            </p>
          </div>

          <ExclusivePlan />
        </div>
      </div>
    </div>
  );
}
