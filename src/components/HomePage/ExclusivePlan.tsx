import { IconSizeEnum } from "@/types/icon_types";
import SubscribeButton from "../SubscribeButton";
import CheckIcon from "@/components/icons/CheckIcon";

export default async function ExclusivePlan() {
  return (
    <div className="lg:w-[640px] lg:h-[480px] lg:my-0 w-full my-5 bg-blur-500/90 backdrop-blur-md p-6 rounded-[1.25rem] flex items-center justify-center text-white border-[1px] border-carrot-600">
      <div>
        <h1 className="text-2xl font-medium leading-8 space-y-6">
          Exclusive Plan
        </h1>
        <h2 className="text-base font-normal leading-6 space-y-4">
          Access to the full suite of advanced functionalities
        </h2>
        <h2 className="text-5xl font-medium leading-15 space-y-12 tracking-tight my-6">
        €&thinsp;49{" "}
          <span className="text-2xl space-y-4 font-normal">/&thinsp;month</span>
        </h2>
        <ul className="text-base font-medium leading-6 space-y-4">
          <li>
            <CheckIcon size={IconSizeEnum.small} />
            Boost Your Brand with a Custom Site
          </li>
          <li>
            <CheckIcon size={IconSizeEnum.small} />
            Mobile and Desktop Version
          </li>
          <li>
            <CheckIcon size={IconSizeEnum.small} />
            Search Engine Optimization (SEO) 
          </li>
          <li>
            <CheckIcon size={IconSizeEnum.small} />
            Hosting & Domain & Business Email
          </li>
        </ul>
        <div className="mt-10">
          <SubscribeButton customAmount="49"/>
        </div>
      </div>
    </div>
  );
}
