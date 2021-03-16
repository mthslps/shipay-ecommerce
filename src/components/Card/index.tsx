import React from "react";
import "styled-components/macro";

import { CardWrapper, CardBody } from "./styles";

const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...rest
}) => {
  return (
    <CardWrapper {...rest}>
      <CardBody data-testid="card-body">{children}</CardBody>
    </CardWrapper>
  );
};

export default Card;
