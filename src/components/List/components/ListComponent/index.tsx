import React, { useRef, useCallback, memo, useState } from "react";
import { Animated } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { useTheme } from "styled-components";
import { formatWithMask, Masks } from "react-native-mask-input";
import { useDispatch } from "react-redux";

import { editIncome } from "../../../../redux/incomeSlice";
import { editInvoice } from "../../../../redux/invoiceSlice";
import { ListData, TypeData } from "../../../../interfaces";
import { CheckIcon, Edit, Trash } from "../../../../assets";
import { Label1 } from "../../../../styles/fonts";
import {
  Button,
  ButtonContainer,
  ButtonContent,
  CheckBoxButton,
  Completed,
  Container,
  ContainerValue,
} from "./styles";

export type onPressLeft = (type: TypeData, value: ListData) => void;
export type onPressRight = (value: ListData) => void;

export interface ItemComponent {
  data: ListData;
  onPressLeft: onPressLeft;
  onPressRight: onPressRight;
  type: TypeData;
}

const ListComponent: React.FC<ItemComponent> = ({
  data,
  onPressLeft,
  onPressRight,
  type,
}) => {
  const swipeableRowRef = useRef<Swipeable>(null);
  const dispatch = useDispatch();
  const theme = useTheme();

  const closeSwipeable = useCallback(() => {
    swipeableRowRef.current?.close();
  }, [swipeableRowRef]);

  const toggleCheck = useCallback(() => {
    if (type === "income") {
      dispatch(editIncome({ ...data, checked: !data.checked }));
    }

    if (type === "invoice") {
      dispatch(editInvoice({ ...data, checked: !data.checked }));
    }
  }, [data, type]);

  const editData = useCallback(() => {
    closeSwipeable();
    onPressLeft(type, data);
  }, [type, data]);

  const deleteData = useCallback(() => {
    closeSwipeable();
    onPressRight(data);
  }, [data]);

  const renderLeftActions = (
    progress: Animated.AnimatedInterpolation<number>,
    _dragAnimatedValue: Animated.AnimatedInterpolation<number>
  ) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [-100, 0],
      extrapolate: "clamp",
    });

    return (
      <Animated.View style={{ transform: [{ translateX: trans }] }}>
        <ButtonContainer colors={theme.gradientColors.green}>
          <Button onPress={editData}>
            <Edit color={theme.primary.white} />
            <Label1 color={theme.primary.whiteSmoke}>Editar</Label1>
          </Button>
        </ButtonContainer>
      </Animated.View>
    );
  };

  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<number>,
    _dragAnimatedValue: Animated.AnimatedInterpolation<number>
  ) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [100, 0],
      extrapolate: "clamp",
    });

    return (
      <Animated.View style={{ transform: [{ translateX: trans }] }}>
        <ButtonContainer colors={theme.gradientColors.red}>
          <Button onPress={deleteData}>
            <Trash color={theme.primary.whiteSmoke} />
            <Label1 color={theme.primary.whiteSmoke}>Excluir</Label1>
          </Button>
        </ButtonContainer>
      </Animated.View>
    );
  };

  return (
    <Swipeable
      ref={swipeableRowRef}
      friction={2}
      enableTrackpadTwoFingerGesture
      leftThreshold={50}
      rightThreshold={50}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      containerStyle={{ backgroundColor: theme.primary.white, borderRadius: 8 }}
    >
      <Container style={{ elevation: 10 }}>
        <ButtonContent onPress={toggleCheck}>
          <ContainerValue>
            <CheckBoxButton>
              {data.checked && <CheckIcon color={theme.secondary.black} />}
            </CheckBoxButton>
            <Label1>{data.label}</Label1>
          </ContainerValue>
          <Label1>
            {
              formatWithMask({
                text: data.amount.toFixed(2).toString(),
                maskAutoComplete: true,
                mask: Masks.BRL_CURRENCY,
              }).masked
            }
          </Label1>
          {data.checked && <Completed />}
        </ButtonContent>
      </Container>
    </Swipeable>
  );
};

export default memo(ListComponent);
