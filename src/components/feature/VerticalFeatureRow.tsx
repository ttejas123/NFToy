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
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div className={`${verticalFeatureClass}`}>
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        <div className="w-full sm:w-1/2 p-6 mx-auto">
          <img src={`${router.basePath}${props.icon}`} alt={props.imageAlt} />
        </div>
        <h3 className="text-6xl text-gray-900 font-bold whitespace-pre-line  font-style-Bebas">
          {props.title}
        </h3>
        <div className="flex justify-center text-xl leading-9">
          {props.button}
        </div>
      </div>

      <div className="w-full mt-10 sm:w-1/2 p-6">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
