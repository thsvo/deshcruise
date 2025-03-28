import Image from "next/image";

export default function PortfolioSection({
  lg_screen_width,
  default_screen_width,
}: {
  lg_screen_width: string;
  default_screen_width: string;
}) {
  return (
    <div className="flex justify-center w-screen ">
      <div
        className={`lg:text-start lg:py-10 ${lg_screen_width} ${default_screen_width} text-center py-5`}
      >
        <h1 className="font-medium text-5xl leading-15 my-6 tracking-tight">
          See Our Work in Action
        </h1>
        {/* Highlights Container */}
        <div className="lg:flex-row lg:py-20 flex flex-col items-center justify-between text-center py-10">
          {/* Highlight 1 */}
          <div className="lg:mt-0 highlight-container-custom">
            <div className="lg:w-[400px] lg:h-[400px] rounded-2xl object-cover w-[200px] h-[200px] mx-auto">
              <Image
                src="/programmer.webp"
                layout="fill"
                objectFit="cover"
                alt="portfolio image"
              />
            </div>
            <p className="mt-3 font-medium text-2xl leading-8">
              VoyageBlur Travel Blog
            </p>
            <p className="text-carrot-500 font-normal font-sm leading-5">
              voyageblur.com
            </p>
          </div>
          {/* Highlight 2 */}
          <div className="highlight-container-custom">
            <div className="lg:w-[400px] lg:h-[400px] rounded-2xl object-cover w-[200px] h-[200px] mx-auto">
              <Image
                src="/programmer.webp"
                layout="fill"
                objectFit="cover"
                alt="portfolio image"
              />
            </div>
            <p className=" mt-3 font-medium text-2xl leading-8">
              VoyageBlur Travel Blog
            </p>
            <p className="text-carrot-500 font-normal font-sm leading-5">
              voyageblur.com
            </p>
          </div>
          {/* Highlight 3 */}
          <div className="highlight-container-custom">
            <div className="lg:w-[400px] lg:h-[400px] rounded-2xl object-cover w-[200px] h-[200px] mx-auto">
              <Image
                src="/programmer.webp"
                layout="fill"
                objectFit="cover"
                alt="portfolio image"
              />
            </div>
            <p className=" mt-3 font-medium text-2xl leading-8">
              VoyageBlur Travel Blog
            </p>
            <p className="text-carrot-500 font-normal font-sm leading-5">
              voyageblur.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
