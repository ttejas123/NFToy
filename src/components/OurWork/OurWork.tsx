import { Background } from '../background/Background';

const OurWork = () => {
  const images = [
    '/assets/images/OurWork/crow.JPG',
    '/assets/images/OurWork/dude_monster.JPG',
    '/assets/images/OurWork/Fire_slayer.JPG',
    '/assets/images/OurWork/HappyMarshmellow.JPG',
    '/assets/images/OurWork/robo_burger.JPG',
    '/assets/images/OurWork/Rubber_dragon.JPG',
    '/assets/images/OurWork/Stone_golem.JPG',
  ];
  return (
    <Background color=" bg-background-base">
      <div className="masonry-container">
        {images.map((val, index) => {
          return (
            <div
              key={index}
              className="masonry-item transform hover:scale-105 transition ease-in-out"
            >
              <a href={val}>
                <img
                  alt={`OurWorkMap ${index}`}
                  src={val}
                  className="rounded-lg"
                />
              </a>
            </div>
          );
        })}
      </div>
    </Background>
  );
};

export { OurWork };
