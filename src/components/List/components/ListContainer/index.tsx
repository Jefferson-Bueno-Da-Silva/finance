import React, { memo } from "react";

import ListComponent from "../ListComponent";
import { Container } from "./styles";
import { FlatList } from "react-native-gesture-handler";

const ListContainer: React.FC = () => {
  const data = new Array(10);
  return (
    <Container style={{ elevation: 5 }}>
      <FlatList data={data} renderItem={() => <ListComponent />} />
    </Container>
  );
};

export default memo(ListContainer);
