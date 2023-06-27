import React from "react";
import { Host } from "react-native-portalize";

import { SimpleHeader } from "../components";

import { Home } from "../screens";

const Routes: React.FC = () => {
  return (
    <Host>
      <Home />
    </Host>
  );
};

export default Routes;
