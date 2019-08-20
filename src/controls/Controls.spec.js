// Test away!
import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent, waitForElement, act} from "@testing-library/react";
import Controls from "./Controls";
describe("<Controls />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Controls />); // generates a DOM tree
    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
  it("buttons render", () => {
    let locked = false;
    let closed = false;
    const mockLocked = jest.fn(() => (locked = !locked));
    const mockClosed = jest.fn(() => (closed = !closed));
    const controls = render(
      <Controls
        locked={locked}
        closed={closed}
        toggleClosed={mockClosed}
        toggleLocked={mockLocked}
      />
    );
    controls.getByText(/Lock Gate/i);
    controls.getByText(/Close Gate/i);
  });
  it("buttons toggle", async () => {
    let locked = false;
    let closed = false;
	  
    const controls = render(
      <Controls
        locked={locked}
        closed={closed}
        toggleClosed={() => (closed = !closed)}
        toggleLocked={() => (locked = !locked)}
      />
    );
	//test lock button
    controls.getByText(/Lock Gate/i);
	//test closed button
    controls.getByText(/Close Gate/i);
	//click lick button 
    fireEvent.click(controls.getByText(/Lock Gate/i));
	//check if the button text changed from the button click using async Testing
    act(async() => await waitForElement(() => controls.queryByText(/Lock Gate/i).toBeNull()));
	
  });
});