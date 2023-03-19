import React from "react";
import Button from "./Button";

type Data = {
  title: string;
  description: string;
  btnTitle: string;
  cardImgSrc?: string;
  cardBg: string;
};

type Props = {
  data: Data;
};
const Card = (props: Props) => {
  const {
    title,
    description,
    btnTitle,
    cardBg = "bg-blue-200",
    cardImgSrc,
  } = props.data;
  
  let classNames = "py-8 px-10 flex items-center justify-center rounded-xl " + cardBg;

  return (
    <div className={classNames}>
      <div>
        <h2 className="text-2xl font-semibold py-2 roun">{title}</h2>
        <p className="text-gray-600 p-3">{description}</p>
        <div className="py-3">
          <Button size="medium" text="sm" type="primary">
            {btnTitle}
          </Button>
        </div>
      </div>
      <div className="">
        <img className="" src={require(`../../assets/${cardImgSrc}`)} alt="" />
      </div>
    </div>
  );
};

export default Card;
