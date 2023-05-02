import React, { useRef, useCallback, memo } from "react";
import { Animated, StyleSheet } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { RectButton } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "styled-components";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import { Label1 } from "../../../../styles/fonts";
import { CircleIcon, Container, ContainerValue } from "./styles";
import { GradientColors } from "../../../../styles/theme";

const ListComponent: React.FC = () => {
  const swipeableRowRef = useRef(null);
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
          <LinearGradient
            colors={GradientColors.green.colors}
            style={{
              width: 100,
              height: "100%",
              flexDirection: "row",
            }}
          >
            <RectButton
              style={[
                {
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                  padding: 16,
                },
              ]}
              onPress={pressHandler}
            >
              <Ionicons
                name="ios-create-outline"
                size={24}
                color={theme.primary.white}
              />
              <Label1 color={theme.primary.whiteSmoke}>Editar</Label1>
            </RectButton>
          </LinearGradient>
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
          <LinearGradient
            colors={GradientColors.red.colors}
            style={{
              width: 100,
              height: "100%",
              flexDirection: "row",
            }}
          >
            <RectButton
              style={[
                {
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                  padding: 16,
                },
              ]}
              onPress={pressHandler}
            >
              <Ionicons
                name="trash-bin-outline"
                size={24}
                color={theme.primary.whiteSmoke}
              />
              <Label1 color={theme.primary.whiteSmoke}>Excluir</Label1>
            </RectButton>
          </LinearGradient>
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
    >
      <Container>
        <ContainerValue>
          <CircleIcon>
            <MaterialIcons
              name="attach-money"
              size={24}
              color={theme.primary.whiteSmoke}
            />
          </CircleIcon>
          <Label1>Loren Ipson</Label1>
        </ContainerValue>
        <Label1>R$ 130.00</Label1>
      </Container>
    </Swipeable>
  );
};

export default memo(ListComponent);
