import React, { memo, useCallback, useRef } from "react";
import {
  SectionList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  SectionListData,
} from "react-native";

import ListComponent, {
  onPressLeft,
  onPressRight,
} from "../components/ListComponent";
import { Body1, Header4 } from "../../../styles/fonts";
import { ContentValue } from "./styles";
import { Masks, formatWithMask } from "react-native-mask-input";
import { ListData, TypeData } from "../../../interfaces";

export type section = {
  title: string;
  total: number;
  type: TypeData;
  currentYear: number;
  currentMonth: number;
  data: ListData[];
};

interface ListItems {
  onPressLeft: onPressLeft;
  onPressRight: onPressRight;
  data: SectionListData<ListData, section>[];
  header: JSX.Element;
  onScroll?:
    | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    | undefined;
}

const ListItems: React.FC<ListItems> = ({
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
      sections={data.filter((section) => section.data?.length > 0)}
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
                text: section.total?.toFixed(2),
                maskAutoComplete: true,
                mask: Masks.BRL_CURRENCY,
              }).masked
            }
          </Body1>
        </ContentValue>
      )}
      renderItem={({ item, section }) => (
        <ListComponent
          data={item}
          section={section}
          onPressLeft={onPressLeft}
          onPressRight={onPressRight}
        />
      )}
    />
  );
};

export default memo(ListItems);
