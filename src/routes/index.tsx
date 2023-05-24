import React from "react";
import { Host } from "react-native-portalize";

import { SimpleHeader } from "../components";

import { Home } from "../screens";

import { defaultTheme } from "../styles/theme";

const Routes: React.FC = () => {
  return (
    <Host>
      <SimpleHeader />
      <Home />
    </Host>
  );
};

export default Routes;
