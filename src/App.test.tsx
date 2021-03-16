import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

const createRootContainer = () => {
  let container = document.getElementById("root");
  if (!container) {
    container = document.createElement("div");
    container.setAttribute("id", "root");
    document.body.appendChild(container);
  }
  return container;
};

test("renders App", () => {
  render(<App />, { container: createRootContainer() });
  const loadingElement = screen.getByText(/Carregando.../i);
  expect(loadingElement).toBeInTheDocument();
});
