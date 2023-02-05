import { Background } from '../background/Background';
import { BaseCard as CARD } from '../Cards/BaseCard';

interface CardData {
  description: string;
  img: string;
  title: string;
}

const WHY_US = () => {
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
      img: '/assets/images/ICONS/ICON-CONTRACT.png',
      title: 'Contracting',
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
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: '/assets/images/ICONS/ICON-DEVELOP&LAUNCH.png',
      title: 'Develop & Launch',
    },
  ];
  return (
    <Background color="bg-background-highlight">
      <div className="flex flex-wrap w-full py-12 overflow-hidden">
        {data.map((val: CardData, index: number) => {
          return (
            <div
              className="w-full md:w-3/6 lg:w-2/6 px-5 transform hover:scale-105 transition ease-in-out"
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
    </Background>
  );
};

export { WHY_US };
