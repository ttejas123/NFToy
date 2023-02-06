import { ReactNode } from 'react';

import className from 'classnames';
import { useRouter } from 'next/router';

import TitleNDescription from '../Cards/TitleNDescription';

type IVerticalFeatureTwoSelectionProps = {
  title: ReactNode;
  button: ReactNode;
  description: string;
  image: string;
  icon: string;
  imageAlt: string;
  reverse?: boolean;
  floatFrame?: string;
};

const VerticalFeatureTwoSection = (
  props: IVerticalFeatureTwoSelectionProps
) => {
  const verticalFeatureClass = className('flex', 'flex-wrap', 'bg-gray-100', {
    'flex-row-reverse': props.reverse,
  });

  const router = useRouter();

  return (
    <div className={`${verticalFeatureClass}`}>
      <div className="w-full sm:w-1/2 sm:px-6 sm:py-6">
        <div className="w-full ">
          <h1 className="text-3xl whitespace-pre-line font-bold text-black font-style-Bebas leading-none">
            Customize your NFT
          </h1>
          <div className="flex font-extrabold text-black py-3">
            <div className=" border-x-gray-500 border-r-2 pr-3">$150</div>
            <div className=" border-x-gray-500 border-r-2 px-3">20 SOL</div>
            <div className="px-3 text-red-600">6 Left</div>
          </div>
          <div className="w-10/12 text-sm">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
            cupidatat.
          </div>
        </div>
        <div className="py-3 text-gray-600">
          <div className="text-md font-bold font-style-Bebas text-zinc-600">
            Supported Collection:
          </div>
          <li className="ml-3 text-sm">Rude Golems</li>
          <li className="ml-3 text-sm">Sharks</li>
          <li className="ml-3 text-sm">Clayursours</li>
        </div>
        <div className="pb-3 text-gray-600">
          <div className="text-md font-style-Bebas font-bold text-zinc-600">
            Details:
          </div>
          <div className="w-10/12 text-sm">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
            cupidatat.
          </div>
        </div>

        <div className="pb-3 text-gray-600">
          <div className="text-md font-style-Bebas font-bold text-zinc-600">
            Details:
          </div>
          <div className="w-full md:flex md:overflow-x-auto scroll-smooth scrollbar-hide">
            <TitleNDescription
              title="Normal"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse"
              selected={true}
            />
            <TitleNDescription
              title="Glowing"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse"
            />
            <TitleNDescription
              title="Normal Normal"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse"
            />
          </div>
        </div>

        <div className="flex text-xl leading-9 mb-5 sm:mb-0">
          {props.button}
        </div>
      </div>

      <div
        className={`w-full bg-green-00 sm:w-1/2 p-6 bg-background-hero flex items-center justify-center`}
      >
        <img
          src={`${router.basePath}${props.image}`}
          className={`${props.floatFrame} w-4/5`}
          alt={props.imageAlt}
        />
      </div>
    </div>
  );
};

export { VerticalFeatureTwoSection };
