import { ReactNode } from 'react';

import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureTwoSelectionProps = {
  title: ReactNode;
  button: ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  priceDoller: number;
  priceSol: number;
  stockLeft: number;
  reverse?: boolean;
  floatFrame?: string;
  supported?: string[];
  details?: string[];
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
      <div className="w-full sm:w-1/2 sm:px-6 sm:py-6 flex justify-center flex-col">
        <div className="w-full ">
          <h1 className="text-3xl whitespace-pre-line font-bold text-black font-style-Bebas leading-none">
            {props.title}
          </h1>
          <div className="flex font-extrabold text-black py-3">
            <div className=" border-x-gray-500 border-r-2 pr-3">
              ${props.priceDoller}
            </div>
            <div className=" border-x-gray-500 border-r-2 px-3">
              {props.priceSol} SOL
            </div>
            <div className="px-3 text-red-600">{props.stockLeft} Left</div>
          </div>
          <div className="w-10/12 text-sm">{props.description}</div>
        </div>
        <div className="py-3 text-gray-600">
          <div className="text-md font-bold font-style-Bebas text-zinc-600">
            Supported Collection:
          </div>
          {props.supported?.map((val, index) => (
            <li key={index} className="ml-3 text-sm">
              {val}
            </li>
          ))}
        </div>
        <div className="pb-3 text-gray-600">
          <div className="text-md font-style-Bebas font-bold text-zinc-600">
            Details:
          </div>
          <div className="w-10/12 text-sm ml-3">
            {props.details?.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
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
