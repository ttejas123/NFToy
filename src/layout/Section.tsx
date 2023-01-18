import { ReactNode, useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
  id?: string;
};

const Section = (props: ISectionProps) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id={props.id}
      className={`${props.className} ${
        props.fullWidth ? 'w-full' : 'max-w-screen-lg px-3'
      } mx-auto ${props.yPadding ? props.yPadding : 'py-16'} overflow-hidden`}
    >
      {(props.title || props.description) && (
        <div
          data-aos="slide-left"
          className={`mb-12 text-center ${
            props.fullWidth && 'max-w-screen-lg'
          } mx-auto`}
        >
          {props.title && (
            <h2 className="text-4xl text-gray-900 font-extrabold">
              {props.title}
            </h2>
          )}
          {props.description && (
            <div className="mt-4 text-xl md:px-20">{props.description}</div>
          )}
        </div>
      )}
      <div data-aos="slide-right">{props.children}</div>
    </div>
  );
};

export { Section };
