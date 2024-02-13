import { useState, useEffect } from "react";
import MediaQuery from "react-responsive";

const Burger = ({ className, onClick, visibleSidebar }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <MediaQuery maxWidth={766}>
      <button
        className={`relative z-[25] shrink-0 flex flex-col items-center justify-center w-8 h-8 my-5 ml-auto  tap-highlight-color md:absolute md:top-5 md:right-4 md:m-0 ${
          visibleSidebar && "md:!fixed"
        } ${className}`}
        onClick={onClick}
      >
        <span
          className={`w-5 h-0.5 my-0.5 bg-n-7 rounded-full transition-all dark:bg-n-4 ${
            visibleSidebar && "translate-y-0.75 rotate-45"
          }`}
        ></span>
        <span
          className={`w-5 h-0.5 my-0.5 bg-n-7 rounded-full transition-all dark:bg-n-4 ${
            visibleSidebar && "-translate-y-0.75 -rotate-45"
          }`}
        ></span>
      </button>
    </MediaQuery>
  ) : null;
};

export default Burger;
