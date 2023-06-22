import React, { useCallback, useRef, useState } from "react";
import { NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import uuid from "react-native-uuid";

import { ListData, TypeData } from "../../interfaces";
import { FloatButton, GraphicPie, ListItems, BigModal } from "../../components";
import { BigModalRefs } from "../../components/Modals/BigModal";
import { Container } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Home: React.FC = () => {
  const bigModalRef = useRef<BigModalRefs>(null);
  const { income, invoice } = useSelector((state: RootState) => state);
  const [showButton, setShowButton] = useState<boolean>(true);

  const onFloatButtonVisible = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    setShowButton(event.nativeEvent.contentOffset.y < 10 ? true : false);
  };

  const handleOpenModal = useCallback(
    (text: TypeData, data?: ListData) => {
      console.log(text, data);

      bigModalRef.current?.open(text, data);
    },
    [bigModalRef]
  );

  const getTotal = useCallback((data: ListData[]) => {
    return data.reduce((acc, cur) => {
      return acc + cur.amount;
    }, 0);
  }, []);

  const inputs = {
    title: "Entrada",
    total: getTotal(income),
    type: "income" as TypeData,
    data: income,
  };

  const outputs = {
    title: "Saídas",
    total: getTotal(invoice),
    type: "invoice" as TypeData,
    data: invoice,
  };

  return (
    <Container>
      <ListItems
        data={[inputs, outputs]}
        onPressLeft={(type, data) => handleOpenModal(type, data)}
        onPressRight={() => {}}
        onScroll={onFloatButtonVisible}
        header={<GraphicPie />}
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
