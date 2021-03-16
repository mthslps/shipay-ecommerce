import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";

import Card from ".";

describe("Card component", () => {
  it("should exists", () => {
    expect(Card).toBeDefined();
  });
  it("should render children", () => {
    render(
      <ThemeProvider theme={theme}>
        <Card>Card Text</Card>
      </ThemeProvider>
    );

    expect(screen.getByText(/Card Text/i)).toBeDefined();
  });
});
