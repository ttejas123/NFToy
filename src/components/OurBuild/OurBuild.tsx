import { Background } from '../background/Background';
import { ActorCard as CARD } from '../Cards/ActorCard';

interface CardData {
  description: string;
  img: string;
  title: string;
  color: string;
}

const OurBuild = () => {
  const data: CardData[] = [
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: '/assets/images/ACTOR/2DNFTAsset.jpg',
      title: 'YOUR 2D NFT',
      color: 'bg-[#807e67]',
    },
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: '/assets/images/ACTOR/Design&Prototype.png',
      title: 'CUSTOM DESIGNED 3D',
      color: 'bg-[#797979]',
    },
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: '/assets/images/ACTOR/3DNFTBuild.jpg',
      title: '3D PRINTED & COLORED',
      color: 'bg-black',
    },
  ];
  return (
    <Background color="bg-background-base">
      <div className="flex flex-wrap w-full py-10 justify-center items-center">
        <div className="w-full md:w-3/12 px-5 py-2 md:py-0 transform hover:scale-105 transition ease-in-out">
          <CARD
            key={1}
            img={data[0]?.img}
            color={data[0]?.color}
            title={data[0]?.title}
          />
          <div className="text-2xl leading-none pt-5 text-center font-style-Bebas text-black font-bold">
            {data[0]?.title}
          </div>
        </div>

        <div className="hidden md:block md:w-[9%] px-5 py-2 md:py-0 transform hover:scale-105 transition ease-in-out">
          <div className="w-12 h-12 rounded-full bg-black text-white flex justify-center items-center">
            ➜
          </div>
        </div>

        <div className="w-full md:w-3/12 px-5 py-2 md:py-0 transform hover:scale-105 transition ease-in-out">
          <CARD
            key={2}
            img={data[1]?.img}
            color={data[1]?.color}
            title={data[1]?.title}
          />
          <div className="text-2xl leading-none pt-5 text-center font-style-Bebas text-black font-bold">
            {data[1]?.title}
          </div>
        </div>

        <div className="hidden md:block md:w-[9%] px-5 py-2 md:py-0 transform hover:scale-105 transition ease-in-out">
          <div className="w-12 h-12 rounded-full bg-black text-white flex justify-center items-center">
            ➜
          </div>
        </div>

        <div className="w-full md:w-3/12 px-5 py-2 md:py-0 transform hover:scale-105 transition ease-in-out">
          <CARD
            key={3}
            img={data[2]?.img}
            color={data[2]?.color}
            title={data[2]?.title}
          />
          <div className="text-2xl leading-none pt-5 text-center font-style-Bebas text-black font-bold">
            {data[2]?.title}
          </div>
        </div>
      </div>
    </Background>
  );
};

export { OurBuild };
