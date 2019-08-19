// Test away!
import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";

import Controls from "./Controls";

describe("<Controls />", () => {
    it("matches snapshot", () => {
      const tree = renderer.create(<Controls/>); // generates a DOM tree
  
      // snapshots are a JSON representation of the DOM tree
      expect(tree.toJSON()).toMatchSnapshot();
    });
  
    // Implementation details ->
  //   - what the props are doing...
  //   - if props are` invoked...

  // What we _want_ to test:
  //    - When our user clicks that button... what happens in the app?
    
    it("button is disabled when gate is locked ", () => {
        const toggleLocked = jest.fn();
   // set up component 
    const { getByText, getByTestId } = render(<Controls toggleLocked={toggleLocked}/>)

   // action 
    const button = getByText(/lock-unlock/i)
    console.log(button);
    fireEvent.click(button)

    // assert 
    expect(toggleLocked).toHaveBeenCalled();
 
    }); 
      

});