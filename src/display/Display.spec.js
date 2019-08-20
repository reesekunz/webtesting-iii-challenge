// Test away!

describe("<Display />", () => {
    it("matches snapshot", () => {
      const tree = renderer.create(<Display />);
      expect(tree.toJSON()).toMatchSnapshot();
    });

