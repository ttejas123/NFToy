import { Background } from '../background/Background';
import { CARD } from './Card';

const WHY_US = () => {
  return (
    <Background color="bg-[#C0C300]">
      <div className="flex flex-wrap w-full p-5">
        <div className="w-2/6 px-5">
          <CARD
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            img="/assets/images/ICONS/ICON-CONTACT.png"
            title="Initial Contact"
          />
        </div>
        <div className="w-2/6 px-5">
          <CARD
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            img="/assets/images/ICONS/ICON-DISCOVERY.png"
            title="Initial Discover"
          />
        </div>
        <div className="w-2/6 px-5">
          <CARD
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            img="/assets/images/ICONS/ICON-CONTRACT.png"
            title="Initial Contact"
          />
        </div>
        <div className="w-2/6 px-5">
          <CARD
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            img="/assets/images/ICONS/ICON-PROTOTYPING.png"
            title="Initial Contact"
          />
        </div>
        <div className="w-2/6 px-5">
          <CARD
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            img="/assets/images/ICONS/ICON_DESIGN.png"
            title="Initial Contact"
          />
        </div>
        <div className="w-2/6 px-5">
          <CARD
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            img="/assets/images/ICONS/ICON-DEVELOP&LAUNCH.png"
            title="Initial Contact"
          />
        </div>
      </div>
    </Background>
  );
};

export { WHY_US };
