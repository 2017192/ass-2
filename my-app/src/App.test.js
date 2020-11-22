import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Huzaifa_2017192_Testing_Deployment/i);
  expect(linkElement).toBeInTheDocument();
});
