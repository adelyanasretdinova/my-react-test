import { render, screen } from "@testing-library/react";
import Display from "./Display";

describe("Display props", () => {
  test("displays a header", () => {
    render(<Display text="a" data={["a"]} />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  test("displays text props", () => {
    render(<Display text="abc" data={["a"]} />);
    const textFromProp = screen.getByText("abc");
    expect(textFromProp).toBeInTheDocument();
  });
  test("displays other text props", () => {
    render(<Display text="aaa" data={["a"]} />);
    const textFromProp = screen.getByText("aaa");
    expect(textFromProp).toBeInTheDocument();
  });
  test("renders a Child", () => {
    render(<Display text="aaa" data={["1", "2", "3"]} />);
    let firstChild = screen.getByText("1");
    let secondChild = screen.getByText("2");
    let thirdChild = screen.getByText("3");
    expect(firstChild).toBeInTheDocument();
    expect(secondChild).toBeInTheDocument();
    expect(thirdChild).toBeInTheDocument();
  });

  test("renders another Child", () => {
    render(<Display text="aaa" data={["4", "5", "6"]} />);
    let firstChild = screen.getByText("1");
    let secondChild = screen.getByText("2");
    let thirdChild = screen.getByText("3");
    expect(firstChild).toBeInTheDocument();
    expect(secondChild).toBeInTheDocument();
    expect(thirdChild).toBeInTheDocument();
  });
});
