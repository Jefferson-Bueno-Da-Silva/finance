import React, {
  useRef,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";
import { Modalize } from "react-native-modalize";
import { Portal } from "react-native-portalize";

import { FormCreate } from "../../Forms";
import { Header1 } from "../../../styles/fonts";
import { HeaderContainer } from "./styles";
import { ListData, TypeData } from "../../../interfaces";

type BigModalProps = {};

type Open = (type: TypeData, data?: ListData) => void;
type Close = () => void;

export type BigModalRefs = {
  open: Open;
  close: Close;
};

const BigModal = forwardRef<BigModalRefs, BigModalProps>((_, ref) => {
  const modalizeRef = useRef<Modalize>(null);
  const [typeData, setTypeData] = useState<TypeData>("income");
  const [editableData, setEditableData] = useState<ListData>();

  const open = useCallback<Open>(
    (type, data) => {
      setTypeData(type);
      setEditableData(data);
      modalizeRef.current?.open();
    },
    [modalizeRef]
  );

  const close = useCallback<Close>(() => {
    modalizeRef.current?.close();
    setEditableData(undefined);
  }, [modalizeRef]);

  useImperativeHandle(
    ref,
    () => {
      return {
        open,
        close,
      };
    },
    [open, close]
  );

  const flexibleTitle = useCallback(() => {
    let transaction;
    let toDo;

    if (editableData) {
      toDo = "Editar";
    } else {
      toDo = "Adicionar";
    }

    if (typeData === "income") {
      transaction = "Renda";
    } else {
      transaction = "Conta";
    }

    return `${toDo} ${transaction}`;
  }, [typeData, editableData]);

  return (
    <Portal>
      <Modalize
        ref={modalizeRef}
        handlePosition="inside"
        adjustToContentHeight
        disableScrollIfPossible={false}
        HeaderComponent={
          <HeaderContainer>
            <Header1>{flexibleTitle()}</Header1>
          </HeaderContainer>
        }
      >
        <FormCreate
          onEnd={close}
          typeData={typeData}
          initialValue={editableData}
        />
      </Modalize>
    </Portal>
  );
});

export default BigModal;
