// Test away!
import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";

import Display from "./Display";

describe("<Display />", () => {
    it("matches snapshot", () => {
      const tree = renderer.create(<Display />);
      expect(tree.toJSON()).toMatchSnapshot();
    });
    it("displays when gate is closed", () => {
        const { getByText} = render(<Display locked={true} closed={true} />);
        expect(getByText(/closed/i)).toBeTruthy();
      });
    
      it("displays when gate is open", () => {
        const { getByText } = render(<Display locked={true} closed={false} />);
        expect(getByText(/open/i)).toBeTruthy();
      });
    
      it("displays when gate is locked", () => {
        const { getByText } = render(<Display locked={true} closed={false} />);
        expect(getByText(/locked/i)).toBeTruthy();
      });
    
      it("displays when gate is unlocked", () => {
        const { getByText } = render(<Display locked={false} closed={false} />);
        expect(getByText(/unlocked/i)).toBeTruthy();
      });
    
});

