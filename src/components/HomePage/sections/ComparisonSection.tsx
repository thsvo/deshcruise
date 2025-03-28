import CheckIcon from "@/components/icons/CheckIcon";
import XIcon from "@/components/icons/XIcon";

export default function ComparisonSection({
  lg_screen_width,
  default_screen_width
}: {
  lg_screen_width: string,
  default_screen_width: string,
}) {
  return (
    <div className="lg:text-start text-center flex justify-center w-screen">
      <div
        className={` ${lg_screen_width} lg:mb-0 lg:py-25 ${default_screen_width} mb-10 text-black`}
      >
        {/* Build Faster Section */}
        <div className="">
          <h1 className="header-custom">Build Faster, Rank Higher</h1>
          <h1 className="header-custom">Stand Out from Crowd</h1>
        </div>

        <p className="font-normal text-base leading-6 my-4">
          We adhere to the highest standards of quality in all our products and
          services. From design and development to manufacturing.
        </p>
        {/* LandingPageDev and WordPress container */}
        <div className="lg:flex-row items-center flex flex-col justify-between w-full overflow-hidden">
          {/* LandingPageDev container */}
          <div className="comparison-container-custom border-magenta-300">
            <div>
              <h2 className="font-medium text-2xl leading-8 my-6">
                LandingPageDev
              </h2>
            </div>
            <ul>
              <li className="list-item-custom">
                <div>
                  <CheckIcon />
                </div>{" "}
                <span>Optimized for Google Search Engine</span>
              </li>
              <li className="list-item-custom">
                <div>
                  <CheckIcon />
                </div>{" "}
                <span>Ultrafast Load Times</span>
              </li>
              <li className="list-item-custom">
                <div>
                  <CheckIcon />
                </div>{" "}
                <span>Secure</span>
              </li>
              <li className="list-item-custom">
                <div>
                  <CheckIcon />
                </div>{" "}
                <span>Unique</span>
              </li>
              <li className="list-item-custom">
                <div>
                  <CheckIcon />
                </div>{" "}
                <span>Adaptable to your needs</span>
              </li>
              <li className="list-item-custom">
                <div>
                  <CheckIcon />
                </div>{" "}
                <span>Expert Assistance</span>
              </li>
            </ul>
          </div>
          {/* WordPress container */}
          <div className="lg:mt-0 comparison-container-custom border-vampire-400 mt-5">
            <div>
              <h2 className="font-medium text-2xl leading-8 my-6">Website Builders</h2>
            </div>
            <ul>
              <li className="list-item-custom">
                <div>
                  <XIcon />
                </div>
                <span>Worse SEO</span>
              </li>
              <li className="list-item-custom">
                <div>
                  <XIcon />
                </div>{" "}
                <span>Slow</span>
              </li>
              <li className="list-item-custom">
                <div>
                  <XIcon />
                </div>{" "}
                <span>Security Risks from Plugins</span>
              </li>
              <li className="list-item-custom">
                <div>
                  <XIcon />
                </div>{" "}
                <span>Limited by Themes</span>
              </li>
              <li className="list-item-custom">
                <div>
                  <XIcon />
                </div>{" "}
                <span>Common Designs</span>
              </li>
              <li className="list-item-custom">
                <div>
                  <XIcon />
                </div>{" "}
                <span>Poor / No Support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
