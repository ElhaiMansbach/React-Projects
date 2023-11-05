import React from "react";
import { render } from "@testing-library/react";
import Container from "./Container";

test("Container component renders correctly", () => {
  const { getByAltText, getByText } = render(<Container />);
  const catImage = getByAltText("GitHub cat");
  const titleText = getByText("GitHub User History");
  expect(catImage).toBeInTheDocument();
  expect(titleText).toBeInTheDocument();
});
