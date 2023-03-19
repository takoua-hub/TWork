import { IconName } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import Button from "./Button";
import Icon from "./Icon";

type Data = {
  placeholder: string;
  inputIcon: string;
  type: string;
  iconName: IconName;
  iconColor: string;
};
type Props = {
  data: Data;
};
export const InputStyles = {
  search:
    "px-1 md:px-8 py-5 md:py-7 mr-[1px] placeholder:text-gray-400 placeholder:text-lg md:placeholder:text-xl placeholder:text-slate-400 shadow-sm focus:outline-none",
};

const InputRoundDirections = {
  left: "rounded-l-full",
  right: "rounded-r-full",
};

const InputSearch = (props: Props) => {

  const {iconColor, iconName } = props.data

  let type = props.data.type as keyof typeof InputStyles;
  //let dir = props.data.roundDir as keyof typeof InputRoundDirections;

  const classNames = InputStyles[type]
  return (
    <div className="flex items-center w-[150px] md:w-auto">
      <div className="absolute text-gary-300 pl-2">
        <Icon  color={iconColor} iconName={iconName}/>
      </div>
      <div>
      <input
        className={classNames}
        type="text"
        placeholder={props.data.placeholder}
      />
      </div>
    </div>
  );
};

export default InputSearch;
