import React, { memo, useCallback, useRef } from "react";
import {
  SectionList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

import ListComponent from "../components/ListComponent";
import { Body1, Header4 } from "../../../styles/fonts";
import { Container, ContentValue, ListContainer } from "./styles";
import { Masks, formatWithMask } from "react-native-mask-input";

type data = {
  label: string;
  amount: number;
  checked: boolean;
};

interface ListItens {
  header: JSX.Element;
  onScroll?:
    | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    | undefined;
}

const ListItens: React.FC<ListItens> = ({ header, onScroll }) => {
  const inputData: data[] = [
    { label: "Loren", amount: 13.1, checked: false },
    { label: "Ipson", amount: 130.0, checked: false },
    { label: "teste", amount: 1200.25, checked: false },
  ];

  const outputData: data[] = [
    { label: "sophya", amount: 30.0, checked: false },
    { label: "Jefferson", amount: 900.0, checked: false },
    { label: "teste teste", amount: 800.0, checked: false },
    { label: "teste de um texto longo", amount: 200.0, checked: false },
    {
      label: "Lorem ipsum dolor debitis rerum neque ducimus.99",
      amount: 130.0,
      checked: false,
    },
  ];

  const getTotal = useCallback((data: data[]) => {
    return data.reduce((acc, cur) => {
      return acc + cur.amount;
    }, 0);
  }, []);

  const inputs = {
    title: "Entrada",
    total: getTotal(inputData),
    type: "income",
    data: inputData,
  };

  const outputs = {
    title: "Saídas",
    total: getTotal(outputData),
    type: "debt",
    data: outputData,
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
          <Body1>
            {
              formatWithMask({
                text: section.total.toFixed(2),
                maskAutoComplete: true,
                mask: Masks.BRL_CURRENCY,
              }).masked
            }
          </Body1>
        </ContentValue>
      )}
      renderItem={({ item, section, index }) => <ListComponent {...item} />}
    />
  );
};

export default memo(ListItens);
