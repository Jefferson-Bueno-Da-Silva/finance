import React, {
  useEffect,
  useRef,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";
import { Modalize } from "react-native-modalize";
import { Portal } from "react-native-portalize";

import { Button } from "../../Buttons";
import { FormCreate } from "../../Forms";
import { Header1 } from "../../../styles/fonts";
import { Container, FooterContainer, HeaderContainer } from "./styles";

type BigModalProps = {};

export type BigModalRefs = {
  open: (text?: string) => void;
  close: () => void;
};

const BigModal = forwardRef<BigModalRefs, BigModalProps>((_, ref) => {
  const modalizeRef = useRef<Modalize>(null);
  const [title, setTitle] = useState("");

  const open = useCallback(
    (text?: string) => {
      if (text) setTitle(text);
      modalizeRef.current?.open();
    },
    [modalizeRef]
  );

  const close = useCallback(() => {
    modalizeRef.current?.close();
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

  const handleCancel = useCallback(() => {
    close();
  }, [close]);

  const handleConfirm = useCallback(() => {
    close();
  }, [close]);

  return (
    <Portal>
      <Modalize
        ref={modalizeRef}
        handlePosition="inside"
        adjustToContentHeight
        disableScrollIfPossible={false}
        HeaderComponent={
          <HeaderContainer>
            <Header1>{title}</Header1>
          </HeaderContainer>
        }
      >
        <FormCreate />
        <FooterContainer>
          <Button label="Cancelar" onPress={handleCancel} secondary error />
          <Button label="Confirmar" onPress={handleConfirm} />
        </FooterContainer>
      </Modalize>
    </Portal>
  );
});

export default BigModal;
