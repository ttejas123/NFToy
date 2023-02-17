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
      description:
        'Skilled artists and artisans create each toy with care and attention to detail',
      img: '/assets/images/ICONS/ICON-CONTACT.png',
      title: 'Craftsmanship',
    },
    {
      description:
        'We incorporate personal elements to make each toy a  meaningful experience',
      img: '/assets/images/ICONS/ICON-DISCOVERY.png',
      title: 'Personal Touch',
    },
    {
      description:
        'Our fast prototyping process allows us to bring your ideas to life quickly.',
      img: '/assets/images/ICONS/ICON-PROTOTYPING.png',
      title: 'Fast Prototyping',
    },
    {
      description:
        'We have the ability to turn 2D NFTs into amazing figurines.',
      img: '/assets/images/ICONS/ICON_DESIGN.png',
      title: '2D to 3D',
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
