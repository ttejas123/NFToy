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
      <div className="max-w-6xl flex flex-col-reverse lg:flex-row py-5 items-center mx-auto">
        <div className="relative flex w-full min-h-max sm:w-2/5 py-12 overflow-hidden">
          <img
            src={`${router.basePath}/assets/images/NFTOY-HERO_ICON.png`}
            className="h-full md:w-full flex justify-center items-center -z-0 -top-0 right-0 floatFrame mt-5"
          />
        </div>
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
      </div>
    </Background>
  );
};

export { WhyUs };
