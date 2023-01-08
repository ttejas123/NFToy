import classNames from 'classnames';
import { useRouter } from 'next/router';

interface CardProp {
  img?: string;
  title?: string;
  color?: string;
}

const ActorCard = (props: CardProp) => {
  const verticalFeatureClass = classNames(
    'mt-5',
    'flex',
    'flex-wrap',
    'items-center'
  );

  const router = useRouter();
  return (
    <div
      className={`${verticalFeatureClass} flex flex-col justify-center ${props.color} shadow-xl two-color-shadow  rounded-md`}
      style={{ minWidth: '100px', minHeight: '480px' }}
    >
      <div className="w-full sm:w-11/12 text-center   ">
        <div className="w-full h-full">
          <img
            src={`${router.basePath}${props.img}`}
            className="w-full h-full "
            alt="ICON WHY_US"
          />
        </div>
      </div>
    </div>
  );
};

export { ActorCard };
