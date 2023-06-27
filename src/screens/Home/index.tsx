import React, { useCallback, useEffect, useRef, useState } from "react";
import { NativeSyntheticEvent, NativeScrollEvent } from "react-native";

import { ListData, TypeData } from "../../interfaces";
import {
  FloatButton,
  GraphicPie,
  ListItems,
  BigModal,
  DateHeader,
} from "../../components";
import { BigModalRefs } from "../../components/Modals/BigModal";
import useListItems from "../../hooks/listItems/useListItems";
import { Container } from "./styles";
import { useTransactions } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addTransaction } from "../../redux/transactionsSlice";

const Home: React.FC = () => {
  const bigModalRef = useRef<BigModalRefs>(null);
  const [showButton, setShowButton] = useState<boolean>(true);
  const {
    incomeData,
    invoiceData,
    currentMonth,
    currentYear,
    nextMonth,
    previousMonth,
  } = useListItems();
  const { remove } = useTransactions();
  const dispatch = useDispatch();
  const transactions = useSelector((state: RootState) => state.transactions);
  // console.log(JSON.stringify(transactions));

  const onFloatButtonVisible = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    setShowButton(event.nativeEvent.contentOffset.y < 10 ? true : false);
  };

  const handleOpenModal = useCallback(
    (text: TypeData, data?: ListData, year?: number, month?: number) => {
      bigModalRef.current?.open(text, data, year, month);
    },
    [bigModalRef]
  );

  const handleDelete = useCallback(
    (type: TypeData, data: ListData) => {
      remove(type, data, currentYear, currentMonth);
    },
    [currentYear, currentMonth]
  );

  return (
    <Container>
      <DateHeader
        currentMonth={currentMonth}
        currentYear={currentYear}
        nextMonth={nextMonth}
        previousMonth={previousMonth}
      />
      <ListItems
        data={[incomeData, invoiceData]}
        onPressLeft={(type, data) =>
          handleOpenModal(type, data, currentYear, currentMonth)
        }
        onPressRight={(type, data) => handleDelete(type, data)}
        onScroll={onFloatButtonVisible}
        header={
          <GraphicPie
            incomeTotal={incomeData.total}
            invoiceTotal={invoiceData.total}
          />
        }
      />
      <FloatButton
        showButton={showButton}
        onPressGreen={() => handleOpenModal("income")}
        onPressRed={() => handleOpenModal("invoice")}
      />
      <BigModal ref={bigModalRef} />
    </Container>
  );
};

export default Home;
