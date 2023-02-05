import React from 'react';

interface TitleNDescriptionProps {
  title: string;
  description?: string;
  selected?: boolean;
}

const TitleNDescription = (props: TitleNDescriptionProps) => (
  <div
    className={`${
      props.selected && '-mt-[0.1px]'
    } bg-gradient-to-r hue-animate mb-5 md:mb-0  from-yellow-400 to-yellow-200 min-w-[99%] m-1 md:mx-2 p-0.5 hover:-mt-[0.1px] rounded-md md:min-w-[14rem] xl:min-w-[14rem] md:max-w-[16rem] xl:max-w-[16rem] text-white`}
  >
    <div className="bg-gray-100 rounded-md p-2">
      <div className="text-stone-500 text-sm">{props.title}</div>
      <div className="text-stone-400 text-xs">{props.description}</div>
    </div>
  </div>
);

export default TitleNDescription;
