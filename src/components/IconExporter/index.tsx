import React from "react";
import { themeColors } from "../../styles/theme";

import { ReactComponent as close } from "../../assets/icons/close.svg";

export const dict = {
  close,
};

interface IProps {
  name: keyof typeof dict;
  color?: keyof typeof themeColors;
  fill?: string;
}

export default ({
  name,
  color = "gray2",
  fill,
  width = 21,
  ...rest
}: IProps & React.SVGAttributes<SVGElement>) => {
  const Icon = dict[name];
  return Icon ? (
    <Icon
      role="img"
      aria-label={name}
      fill={fill ? fill : themeColors[color]}
      width={width}
      {...rest}
    />
  ) : null;
};
