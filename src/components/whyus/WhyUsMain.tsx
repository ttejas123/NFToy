import { useRouter } from 'next/router';

import { Background } from '../background/Background';
import { BaseCard as CARD } from '../Cards/BaseCard';

interface CardData {
  description: string;
  img: string;
  title: string;
}

const WhyUs = () => {
  const router = useRouter();
  const data = [
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: '/assets/images/ICONS/ICON-CONTACT.png',
      title: 'Initial Contact',
    },
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: '/assets/images/ICONS/ICON-DISCOVERY.png',
      title: 'Discovery Session',
    },
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: '/assets/images/ICONS/ICON-PROTOTYPING.png',
      title: 'Fast Prototyping',
    },
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: '/assets/images/ICONS/ICON_DESIGN.png',
      title: 'Design Phase',
    },
  ];
  return (
    <Background color="bg-background-base">
      <div className="flex py-5">
        <div className="flex flex-wrap w-full sm:w-2/5 py-12 overflow-hidden"></div>
        <div className="flex flex-wrap justify-end z-10  w-full sm:w-3/5 overflow-hidden">
          {data.map((val: CardData, index: number) => {
            return (
              <div
                className="w-full md:w-3/6 px-5 transform hover:scale-105 transition ease-in-out"
                key={index}
              >
                <CARD
                  description={val.description}
                  img={val.img}
                  title={val.title}
                />
              </div>
            );
          })}
        </div>

        <img
          src={`${router.basePath}/assets/images/NFTOY-HERO_ICON.png`}
          className="absolute w-2/5 h-full flex justify-center items-center -z-0 -top-0 left-14 floatFrame mt-5"
        />
      </div>
    </Background>
  );
};

export { WhyUs };
