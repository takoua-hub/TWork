import React from "react";
import * as FontAwesome from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IconName, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
} from "@fortawesome/fontawesome-svg-core";

library.add(fas);

type Props = {
  color: string,
  iconName: IconName,
};

const Icon = (props: Props) => {
  const iconDefinition: IconDefinition = findIconDefinition({
    prefix: "fas",
    iconName: props.iconName,
  });
  return (
    <div className="">
      <FontAwesomeIcon color={props.color} icon={iconDefinition} />
    </div>
  );
};

export default Icon;
