import React from "react";

import { SimpleHeader } from "../components";

import { Home } from "../screens";

import { defaultTheme } from "../styles/theme";

const Routes: React.FC = () => {
  return (
    <>
      <SimpleHeader />
      <Home />
    </>
  );
};

export default Routes;
