import React from "react";
import { render } from "@testing-library/react";
import Index from "../src/pages/index";

import * as nextRouter from "next/router";

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: "/" }));

test("renders header link", () => {
  const { getByText } = render(<Index breeds={[]} initialPets={[]} />);
  const linkElement = getByText(/PETS!/);
  expect(linkElement).toBeInTheDocument();
});
