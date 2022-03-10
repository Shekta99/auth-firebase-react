import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/esta es la ruta padre/i);
  expect(linkElement).toBeInTheDocument();
});
