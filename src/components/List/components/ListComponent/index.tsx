import React, { useRef, useCallback, memo, useState } from "react";
import { Animated } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { useTheme } from "styled-components";

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

const ListComponent: React.FC = () => {
  const swipeableRowRef = useRef<Swipeable>(null);
  const theme = useTheme();
  const [checked, setChecked] = useState(false);

  const toggleCheck = useCallback(() => {
    setChecked((old) => !old);
  }, [setChecked]);

  const closeSwipeable = useCallback(() => {
    swipeableRowRef.current?.close();
  }, [swipeableRowRef]);

  const renderLeftActions = useCallback(
    (
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
    },
    []
  );

  const renderRightActions = useCallback(
    (
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
    },
    []
  );

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
            <Label1>Loren Ipson</Label1>
          </ContainerValue>
          <Label1>R$ 130.00</Label1>
          {checked && <Completed />}
        </ButtonContent>
      </Container>
    </Swipeable>
  );
};

export default memo(ListComponent);
