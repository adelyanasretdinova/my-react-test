import { render, screen } from "@testing-library/react";
import Child from "./Child";

describe("Child props", () => {
  test("Renders a Child with other props", () => {
    render(<Child text="a" data={["a"]} />);
    const TestFromChild = screen.getByRole("aaa");
    expect(TestFromChild).toBeInTheDocument();
  });
});
