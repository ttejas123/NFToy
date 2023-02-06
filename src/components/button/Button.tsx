import { ReactNode } from 'react';

import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: ReactNode;
  color_state: boolean;
  wallet?: boolean;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'font-style-Bebas': true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': props.color_state,
    'btn-primary-rev': !props.color_state,
    'wallet-style': props.wallet,
  });

  return (
    <div
      className={`${btnClass} transform hover:scale-105 transition ease-in-out`}
    >
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block text-center cursor-pointer;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-10;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-2 px-10;
          }

          .btn-primary {
            @apply text-white bg-primary-900;
          }

          .btn-primary-rev {
            @apply text-black bg-yellow-300;
          }

          .btn-primary:hover {
            @apply bg-primary-700 border-b border-white;
          }

          .btn-primary-rev:hover {
            @apply bg-yellow-200;
          }

          .wallet-style {
            @apply px-0 py-0;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
