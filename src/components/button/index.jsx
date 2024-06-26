import classNames from "classnames";

export default function Button({ children, className, ...props }) {
  const buttonClass = classNames(
    "rounded-full bg-[#F2AFEF] h-9 p-2 flex items-center justify-center hover:bg-[#E1AFD1] w-full transition-colors text-[#912BBC]",
    className
  );

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}
