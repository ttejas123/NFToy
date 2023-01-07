import classNames from 'classnames';
import { useRouter } from 'next/router';

interface CardProp {
  img: string;
  title: string;
  description: string;
}

const CARD = (props: CardProp) => {
  const verticalFeatureClass = classNames(
    'mt-5',
    'flex',
    'flex-wrap',
    'items-center'
  );

  const router = useRouter();
  return (
    <div
      className={`${verticalFeatureClass} flex flex-col justify-center bg-white  rounded-md`}
      style={{ minWidth: '120px' }}
    >
      <div className="w-full sm:w-11/12 text-center sm:px-5">
        <div className="w-full sm:w-1/2 p-3 mx-auto">
          <img
            src={`${router.basePath}${props.img}`}
            className="mx-auto w-3/6"
            alt="ICON WHY_US"
          />
        </div>
        <h3 className="text-2xl text-gray-900 font-bold">{props.title}</h3>
        <div className="pb-4 text-sm ">{props.description}</div>
      </div>
    </div>
  );
};

export { CARD };
