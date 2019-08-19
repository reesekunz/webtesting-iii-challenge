// Test away!
import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";

import Controls from "./Controls";

describe("<Controls />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Controls />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });

  // Implementation details ->
  //   - what the props are doing...
  //   - if props are` invoked...

  // What we _want_ to test:
  //    - When our user clicks that button... what happens in the app?

  it("renders buttons", () => {
    const { getByText, findByText } = render(<Controls />);
    // Click button
    fireEvent.click(getByText("Lock Gate"));
    findByText(/Lock Gate/i);
  });

  it("toggles lock/unlock on button click", () => {
    const toggleLocked = jest.fn();

    const { getByText } = render(<Controls toggleLocked={toggleLocked} />);

    fireEvent.click(getByText(/Lock Gate/i));

    expect(toggleLocked).toHaveBeenCalled();
  });

  it("toggles open/close gate on button click", () => {
    const toggleClosed = jest.fn();

    const { getByText } = render(<Controls toggleClosed={toggleClosed} />);

    fireEvent.click(getByText(/Close Gate/i));

    expect(toggleClosed).toHaveBeenCalled();
  });
});

