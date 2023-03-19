import React from "react";

type Props = {
  type: string,
  size: string,
  text:string,
  children: string;
};
const btnstand: string = "tracking-wide min-w-[90px] w-full md-w-auto";
export const ButtonType = {
  primary: "bg-[#007456] hover:bg-[#008965] text-white font-bold rounded-full",
  secondary: "bg-green-500 hover:bg-blue-700 text-white font-bold rounded",
  basic: "bg-white hover:bg-gray-700 text-gray-700 font-bold rounded",
  delete: "bg-red-300 hover:bg-red-500 text-white font-bold rounded",
};

export const ButtonText = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  xxl: "text-2xl",
};

const ButtonSize = {
  small: "px-1 md:px-3 py-2",
  medium: "px-4 md:px-6 py-3",
  large: "px-5 md:px-7 py-4",
}

const Button = (props: Props) => {
  let type = props.type  as keyof typeof ButtonType;
  let text = props.text  as keyof typeof ButtonText;
  let size = props.size  as keyof typeof ButtonSize;

  const classNames = btnstand + " " + ButtonType[type] + " " + ButtonText[text]+ " " + ButtonSize[size];
  
  return (
    <button className={classNames}>{props.children}</button>
  );
};

export default Button;
