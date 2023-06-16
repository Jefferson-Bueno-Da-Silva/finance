import React, { memo, useCallback, useRef } from "react";
import {
  SectionList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  SectionListData,
} from "react-native";

import ListComponent from "../components/ListComponent";
import { Body1, Header4 } from "../../../styles/fonts";
import { Container, ContentValue, ListContainer } from "./styles";
import { Masks, formatWithMask } from "react-native-mask-input";
import { ListData } from "../../../interfaces";

interface ListItens {
  onPressLeft: (value: ListData) => void;
  onPressRight: (value: ListData) => void;
  data: SectionListData<
    ListData,
    {
      title: string;
      total: number;
      type: string;
      data: ListData[];
    }
  >[];
  header: JSX.Element;
  onScroll?:
    | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    | undefined;
}

const ListItens: React.FC<ListItens> = ({
  header,
  onScroll,
  onPressLeft,
  onPressRight,
  data,
}) => {
  return (
    <SectionList
      onScroll={onScroll}
      horizontal={false}
      sections={data}
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
      renderItem={({ item, section, index }) => (
        <ListComponent
          {...item}
          onPressLeft={onPressLeft}
          onPressRight={onPressRight}
        />
      )}
    />
  );
};

export default memo(ListItens);
