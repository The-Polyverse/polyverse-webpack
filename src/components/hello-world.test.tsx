import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HelloWorld from "./hello-world";

test("renders hello world", () => {
  render(<HelloWorld />);
  expect(screen.getByText("Hello, World!")).toBeDefined();
});
