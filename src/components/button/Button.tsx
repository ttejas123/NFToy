import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string;
  color_state: boolean;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'font-style-Bebas': true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
    'btn-primary-rev': !props.color_state,
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
            @apply bg-primary-700;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
