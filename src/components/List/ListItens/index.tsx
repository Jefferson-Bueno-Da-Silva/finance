import React, { memo, useRef } from "react";
import {
  SectionList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

import ListComponent from "../components/ListComponent";
import { Body1, Header4 } from "../../../styles/fonts";
import { Container, ContentValue, ListContainer } from "./styles";

interface ListItens {
  header: JSX.Element;
  onScroll?:
    | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    | undefined;
}

const ListItens: React.FC<ListItens> = ({ header, onScroll }) => {
  const inputs = {
    title: "Entrada",
    total: 2000.0,
    type: "income",
    data: new Array(2),
  };
  const outputs = {
    title: "Saídas",
    total: 900.0,
    type: "debt",
    data: new Array(10),
  };

  return (
    <SectionList
      onScroll={onScroll}
      horizontal={false}
      sections={[inputs, outputs]}
      contentContainerStyle={{
        padding: 16,
        gap: 8,
      }}
      ListHeaderComponent={header}
      renderSectionHeader={({ section }) => (
        <ContentValue>
          <Header4>{section.title}</Header4>
          <Body1>R$ {section.total.toFixed(2).replace(".", ",")}</Body1>
        </ContentValue>
      )}
      renderItem={({ item, section, index }) => (
        <ListComponent debt={section.type === "debt"} />
      )}
    />
  );
};

export default memo(ListItens);
