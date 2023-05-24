import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";
import TEST_IMAGES from "./_testCommon.js";

it("renders snowman without crashing", function () {
  render(<Snowman
    images={TEST_IMAGES}
    words={["test"]}
    maxWrong={3}
    />);
});

it("stops game after max number of wrong guesses", function () {
  const { container } = render(<Snowman
    images={TEST_IMAGES}
    words={["test"]}
    maxWrong={3}
    />);

  const a = container.querySelector("button[value=a]");
  fireEvent.click(a);
  const b = container.querySelector("button[value=a]");
  fireEvent.click(b);
  const c = container.querySelector("button[value=a]");
  fireEvent.click(c);

  expect(container.querySelector(".lose")).toBeInTheDocument();
  expect(container.querySelector(".Snowman-buttons")).not.toBeInTheDocument();
})