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
        <FormCreate onEnd={close} />
      </Modalize>
    </Portal>
  );
});

export default BigModal;
