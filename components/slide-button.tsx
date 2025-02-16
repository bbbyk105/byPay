import { ReactNode } from "react";

type SlideButtonProps = {
  onClick: () => void;
  label: string;
  icon?: ReactNode;
  className?: string;
};

const SlideButton = ({
  onClick,
  label,
  icon,
  className = "",
}: SlideButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg flex items-center md:mx-0 mx-auto transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-blue-600 before:transition-all before:duration-300 before:ease-in-out hover:before:left-0 ${className}`}
    >
      <span className="relative z-10">{label}</span>
      {icon && <span className="ml-2 relative z-10">{icon}</span>}
    </button>
  );
};

export default SlideButton;
