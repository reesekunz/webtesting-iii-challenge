// Test away

import React from "react";
import renderer from "react-test-renderer"; 
import { render, fireEvent } from "@testing-library/react";

import Dashboard from "./Dashboard";


describe('<Dashboard />', () => {
    it('should match snapshot', () => {
      const tree = renderer.create(<Dashboard />).toJSON(); // generates a DOM tree
  
      expect(tree).toMatchSnapshot();  // snapshots are a JSON representation of the DOM tree
    });

    it("displays if gate is open/closed and if it is locked/unlocked", () => {
    const { getByText } = render(<Dashboard />);

    getByText(/open/i);
    getByText(/close/i);
    getByText(/lock/i);
    getByText(/unlocked/i);
});

describe("Closed", () => {
    it('Should display closed if prop is true and open if false', () => {
      const { getByTestId, queryByText } = render(<Dashboard />);
  
      expect(queryByText(/bark/i)).toBeFalsy();
  
      fireEvent.click(getByTestId(/speak/i));
  
      expect(queryByText(/bark/i)).toBeTruthy();
    });
  });

  describe("Locked", () => {
    it('Should display locked if prop is true and unlocked if false', () => {
      const { getByTestId, queryByText } = render(<Dashboard/>);
  
      expect(queryByText(/bark/i)).toBeFalsy();
  
      fireEvent.click(getByTestId(/speak/i));
  
      expect(queryByText(/bark/i)).toBeTruthy();
    });
  });