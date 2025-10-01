import React from "react";

type BorderButtonProps = {
  text: string; // button text
  variant?: "filled" | "outlined"; // choose style
  onClick?: () => void; // handle click
  outlinedColor?: string; // outlined text color
  outlinedHoverColor?: string;
  fullWidth?: boolean;
  // outlined hover text color
};

const BorderButton: React.FC<BorderButtonProps> = ({
  text,
  variant = "filled",
  onClick,
  fullWidth= false,
    outlinedColor = "#555555", // default outlined color
  outlinedHoverColor = "#e39a40", // default outlined hover color
}) => {
  return (
    <div className={`relative inline-block text-center ${fullWidth ? 'w-full' : ''}`}>
      {/* Top border */}
      <div className="absolute left-0 -top-[1px] h-px w-full bg-gradient-to-l from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
      {/* Bottom border */}
      <div className="absolute -bottom-[1px] left-0 h-px w-full bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
      {/* Left border */}
      <div className="absolute inset-y-0 -top-[5px] -bottom-[5px] -left-[px] w-px bg-gradient-to-t from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
      {/* Right border */}
      <div className="absolute inset-y-0 -top-[5px] -bottom-[5px] -right-[1px] w-px bg-gradient-to-t from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />

      {/* Button Content */}

      <div className="relative z-20 mx-auto">
        <div
           className={`relative w-full  z-20 cursor-pointer px-4 py-2 font-semibold transition-colors duration-300 ${
          variant === "filled"
            ? "bg-[#f4a950] text-white"
            : `bg-transparent text-[${outlinedColor}] hover:text-[${outlinedHoverColor}]`
        }`}
        >
          <span className="fs-4 px-2 "> {text}</span>
        </div>
      </div>
    </div>
  );
};

export default BorderButton;
