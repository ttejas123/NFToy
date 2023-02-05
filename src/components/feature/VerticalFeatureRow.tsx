import { ReactNode } from 'react';

import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: ReactNode;
  button: ReactNode;
  description: string;
  image: string;
  icon: string;
  imageAlt: string;
  reverse?: boolean;
  floatFrame?: string;
  bgRight?: string;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-32',
    'flex',
    'flex-wrap',
    'items-center',
    'relative',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div className="relative">
      <div className={`${verticalFeatureClass}`}>
        <div className="w-full sm:w-1/2 text-center sm:px-6">
          {props.icon && (
            <div className="w-full sm:w-1/2 p-6 mx-auto">
              <img
                src={`${router.basePath}${props.icon}`}
                alt={props.imageAlt}
              />
            </div>
          )}
          <h3 className="text-6.5xl  flex flex-col justify-start items-start w-full font-bold whitespace-pre-line  font-style-Bebas leading-none">
            {props.title}
          </h3>
          <div className="flex justify-start text-xl leading-9 w-full">
            {props.button}
          </div>
        </div>

        <div className={`${props.floatFrame}`}>
          <img
            src={`${router.basePath}${props.image}`}
            alt={props.imageAlt}
            className="w-96"
          />
        </div>
      </div>
      <img
        src={`${router.basePath}${props.bgRight}`}
        className=" absolute w-80 -z-50 -top-10 -right-7"
      />
    </div>
  );
};

export { VerticalFeatureRow };
