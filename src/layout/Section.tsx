import { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  fullWidth?: boolean;
  children: ReactNode;
  id?: string;
};

const Section = (props: ISectionProps) => (
  <div
    id={props.id}
    className={`${
      props.fullWidth ? 'w-full' : 'max-w-screen-lg px-3'
    } mx-auto ${props.yPadding ? props.yPadding : 'py-16'}`}
  >
    {(props.title || props.description) && (
      <div
        className={`mb-12 text-center ${
          props.fullWidth && 'max-w-screen-lg'
        } mx-auto`}
      >
        {props.title && (
          <h2 className="text-4xl text-gray-900 font-extrabold ">
            {props.title}
          </h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
