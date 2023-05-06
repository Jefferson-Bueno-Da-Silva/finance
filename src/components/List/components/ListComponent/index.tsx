import React, { useRef, useCallback, memo } from "react";
import { Animated } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { useTheme } from "styled-components";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import { Edit, Money, Trash } from "../../../../assets";
import { Label1 } from "../../../../styles/fonts";
import {
  Button,
  ButtonContainer,
  CircleIcon,
  Container,
  ContainerValue,
} from "./styles";

interface ListComponentProps {
  debt: boolean;
}

const ListComponent: React.FC<ListComponentProps> = ({ debt = false }) => {
  const swipeableRowRef = useRef<Swipeable>(null);
  const theme = useTheme();

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
        <ContainerValue>
          <CircleIcon
            style={{ elevation: 5 }}
            colors={
              debt ? theme.gradientColors.red : theme.gradientColors.green
            }
          >
            <Money color={theme.primary.whiteSmoke} />
          </CircleIcon>
          <Label1>Loren Ipson</Label1>
        </ContainerValue>
        <Label1>R$ 130.00</Label1>
      </Container>
    </Swipeable>
  );
};

export default memo(ListComponent);
