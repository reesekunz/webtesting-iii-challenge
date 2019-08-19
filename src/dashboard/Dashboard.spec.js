// Test away

import React from "react";
import renderer from "react-test-renderer"; 
import { render, fireEvent } from "@testing-library/react";

import Dashboard from "./Dashboard";


describe("<Dashboard />", () => {
    it("matches snapshot", () => {
      const tree = renderer.create(<Dashboard />); // generates a DOM tree
  
      // snapshots are a JSON representation of the DOM tree
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
  
 
  
  describe("open/unlock", () => {
    it('Should dispaly open/unlock on render', () => {
      const { queryByText } = render(<Dashboard />);
  
      expect(queryByText(/open/i)).toBeTruthy();
    
      expect(queryByText(/unlock/i)).toBeTruthy();
    });
  });

   
  describe("toggle buttons on lock", () => {
    it("Cant toggle open/close buttons when locked", () => {
      const { queryByText, getByTestId } = render(<Dashboard />);

    const openCloseButton = getByTestId("open-close")
    const lockUnlockButton = getByTestId("lock-unlock")

    fireEvent.click(openCloseButton);
    fireEvent.click(lockUnlockButton);
    expect(queryByText(/closed/i)).toBeTruthy;

    });
  });

