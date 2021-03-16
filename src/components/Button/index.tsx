import React from "react";

import { ButtonStyle, Content } from "./styles";

interface IProps {
  loading?: boolean;
}

const Button: React.FC<
  IProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, loading = false, disabled = false, ...rest }) => (
  <ButtonStyle disabled={disabled || loading} {...rest}>
    <Content>{loading ? <p color="white">Carregando...</p> : children}</Content>
  </ButtonStyle>
);

export default Button;
