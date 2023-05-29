import React, { useRef, useCallback, memo, useState } from "react";
import { Animated } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { useTheme } from "styled-components";
import { formatWithMask, Masks } from "react-native-mask-input";

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
  TextLeft,
} from "./styles";

export interface ItemComponent {
  label: string;
  amount: number;
  checked: boolean;
}

const ListComponent: React.FC<ItemComponent> = ({ label, amount, checked }) => {
  const swipeableRowRef = useRef<Swipeable>(null);
  const theme = useTheme();
  // const [checked, setChecked] = useState(false);

  const toggleCheck = useCallback(() => {
    // setChecked((old) => !old);
  }, []);

  const closeSwipeable = useCallback(() => {
    swipeableRowRef.current?.close();
  }, [swipeableRowRef]);

  const renderLeftActions = (
    progress: Animated.AnimatedInterpolation<number>,
    _dragAnimatedValue: Animated.AnimatedInterpolation<number>
  ) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [-100, 0],
      extrapolate: "clamp",
    });

    const pressHandler = () => {
      closeSwipeable();
    };

    return (
      <Animated.View style={{ transform: [{ translateX: trans }] }}>
        <ButtonContainer colors={theme.gradientColors.green}>
          <Button onPress={pressHandler}>
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

    const pressHandler = () => {
      closeSwipeable();
    };

    return (
      <Animated.View style={{ transform: [{ translateX: trans }] }}>
        <ButtonContainer colors={theme.gradientColors.red}>
          <Button onPress={pressHandler}>
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
              {checked && <CheckIcon color={theme.secondary.black} />}
            </CheckBoxButton>
            <Label1>{label}</Label1>
          </ContainerValue>
          <Label1>
            {
              formatWithMask({
                text: amount.toFixed(2).toString(),
                maskAutoComplete: true,
                mask: Masks.BRL_CURRENCY,
              }).masked
            }
          </Label1>
          {checked && <Completed />}
        </ButtonContent>
      </Container>
    </Swipeable>
  );
};

export default memo(ListComponent);
