import React, { useCallback, useRef, useState } from "react";
import { NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import uuid from "react-native-uuid";

import { ListData, TypeData } from "../../interfaces";
import { FloatButton, GraphicPie, ListItens, BigModal } from "../../components";
import { BigModalRefs } from "../../components/Modals/BigModal";
import { Container } from "./styles";

const Home: React.FC = () => {
  const bigModalRef = useRef<BigModalRefs>(null);
  const [showButton, setShowButton] = useState<boolean>(true);

  const onFloatButtonVisible = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    setShowButton(event.nativeEvent.contentOffset.y < 10 ? true : false);
  };

  const handleOpenModal = useCallback(
    (text: TypeData, data?: ListData) => {
      bigModalRef.current?.open(text, data);
    },
    [bigModalRef]
  );

  const inputData: ListData[] = [
    { id: uuid.v4(), label: "Loren", amount: 13.1, checked: false },
    { id: uuid.v4(), label: "Ipson", amount: 130.0, checked: false },
    { id: uuid.v4(), label: "teste", amount: 1200.25, checked: false },
  ];

  const outputData: ListData[] = [
    { id: uuid.v4(), label: "sophya", amount: 30.0, checked: false },
    { id: uuid.v4(), label: "Jefferson", amount: 900.0, checked: false },
    { id: uuid.v4(), label: "teste teste", amount: 800.0, checked: false },
    {
      id: uuid.v4(),
      label: "teste de um texto longo",
      amount: 200.0,
      checked: false,
    },
    {
      id: uuid.v4(),
      label: "Lorem ipsum dolor debitis rerum neque ducimus.99",
      amount: 130.0,
      checked: false,
    },
  ];

  const getTotal = useCallback((data: ListData[]) => {
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
    <Container>
      <ListItens
        data={[inputs, outputs]}
        onPressLeft={() => handleOpenModal("income")}
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
