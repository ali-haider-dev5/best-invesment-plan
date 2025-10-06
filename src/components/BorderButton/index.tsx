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
      <div className="absolute left-0 -top-[1px] h-px w-full bg-gradient-to-l from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
      <div className="absolute -bottom-[1px] left-0 h-px w-full bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
      <div className="absolute inset-y-0 -top-[5px] -bottom-[5px] -left-[px] w-px bg-gradient-to-t from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
      <div className="absolute inset-y-0 -top-[5px] -bottom-[5px] -right-[1px] w-px bg-gradient-to-t from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
      <div className="relative z-20 mx-auto">
        <div
           className={`relative w-full  z-20 cursor-pointer px-4 py-2 font-semibold transition-colors duration-300 ${
          variant === "filled"
            ? "bg-[#f4a950] text-white hover:text-[#f4a950] hover:bg-transparent hover:ring-[#f4a950]"
            : `bg-transparent text-[${outlinedColor}] hover:text-[${outlinedHoverColor}] hover:bg-[#f4a950]`
        }`}
        >
          <span className="fs-4 px-2 "> {text}</span>
        </div>
      </div>
    </div>
  );
};

export default BorderButton;



// import React from "react";

// type BorderButtonProps = {
//   text: string;
//   variant?: "filled" | "outlined";
//   onClick?: () => void;
//   /** Base color for the button (used as fill for "filled", border/text for "outlined") */
//   color?: string;
//   /** Hover fill color for outlined variant (defaults to `color`) */
//   hoverColor?: string;
//   fullWidth?: boolean;
// };

// const BorderButton: React.FC<BorderButtonProps> = ({
//   text,
//   variant = "filled",
//   onClick,
//   fullWidth = false,
//   color = "#f4a950",
//   hoverColor,
// }) => {
//   const style = {
//     // Tailwind arbitrary color values can read CSS vars
//     // e.g. text-[color:var(--btn-color)]
//     // @ts-expect-error: custom CSS vars
//     "--btn-color": color,
//     "--btn-hover-color": hoverColor || color,
//   } as React.CSSProperties;

//   const base =
//     "group relative inline-flex items-center justify-center overflow-hidden rounded-xl px-5 py-2.5 font-semibold transition-all duration-300";
//   const width = fullWidth ? "w-full" : "";

//   const filled =
//     "text-white bg-[color:var(--btn-color)] ring-1 ring-transparent " +
//     // on hover, become outlined
//     "hover:text-[color:var(--btn-color)] hover:bg-transparent hover:ring-[color:var(--btn-color)]";

//   const outlined =
//     "text-[color:var(--btn-color)] bg-transparent ring-1 ring-[color:var(--btn-color)] " +
//     // on hover, become filled
//     "hover:text-white hover:bg-[color:var(--btn-hover-color)] hover:ring-[color:var(--btn-hover-color)]";

//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       style={style}
//       className={`${base} ${width} ${variant === "filled" ? filled : outlined}`}
//     >
//       <div className="absolute left-0 -top-[1px] h-px w-full bg-gradient-to-l from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
//        <div className="absolute -bottom-[1px] left-0 h-px w-full bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
//        <div className="absolute inset-y-0 -top-[5px] -bottom-[5px] -left-[px] w-px bg-gradient-to-t from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
//        <div className="absolute inset-y-0 -top-[5px] -bottom-[5px] -right-[1px] w-px bg-gradient-to-t from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />

//       <span className="px-2">{text}</span>
//     </button>
//   );
// };

// export default BorderButton;
