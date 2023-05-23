import React, { useCallback, useEffect, useState } from "react";
import { useTheme } from "styled-components/native";
import { MotiView, useAnimationState, useDynamicAnimation } from "moti";

import { useAnimatedRotate, useAnimatedTranslate } from "../../../hooks";
import {
  Button,
  Container,
  ContainerAbsolute,
  ContainerLabel,
  ContainerSecondary,
} from "./styles";
import { Money, Plus } from "../../../assets";
import { Body2 } from "../../../styles/fonts";
import { Easing } from "react-native-reanimated";

export interface FloatButtonProps {
  showButton?: boolean;
}

const FloatButton: React.FC<FloatButtonProps> = ({ showButton = true }) => {
  const rotateButton = useAnimatedRotate();
  const translateButtonGreen = useAnimatedTranslate(60);
  const translateButtonRed = useAnimatedTranslate(120);
  const [enableContainer, setEnableContainer] = useState(true);

  useEffect(() => {
    if (showButton) {
      setEnableContainer(showButton);
      return;
    } else {
      const disable = setTimeout(() => {
        setEnableContainer(showButton);
      }, 1000);

      return () => clearTimeout(disable);
    }
  }, [showButton]);

  const theme = useTheme();

  const onPress = useCallback(() => {
    rotateButton.transitionTo((prevState) => {
      if (prevState === "from") {
        translateButtonGreen.animateTo({
          translateY: 60,
          opacity: 0,
          rotate: "-90deg",
        });
        translateButtonRed.animateTo({
          translateY: 120,
          opacity: 0,
          rotate: "-90deg",
        });
        return "to";
      }
      translateButtonGreen.animateTo({
        translateY: 0,
        opacity: 1,
        rotate: "0deg",
      });
      translateButtonRed.animateTo({
        translateY: 0,
        opacity: 1,
        rotate: "0deg",
      });
      return "from";
    });
  }, [rotateButton, translateButtonGreen, translateButtonRed]);

  return (
    <ContainerAbsolute>
      <MotiView
        state={translateButtonRed}
        transition={{ delay: 200, damping: 12 }}
      >
        <ContainerLabel
          style={{ elevation: 5 }}
          colors={theme.gradientColors.red}
        >
          <Body2 color={theme.primary.whiteSmoke}>Débitos</Body2>
        </ContainerLabel>
        <ContainerSecondary
          style={{ elevation: 5 }}
          colors={theme.gradientColors.red}
        >
          <Button onPress={onPress}>
            <Money color={theme.primary.whiteSmoke} />
          </Button>
        </ContainerSecondary>
      </MotiView>
      <MotiView
        style={{ position: "relative" }}
        state={translateButtonGreen}
        transition={{ delay: 100, damping: 12 }}
      >
        <ContainerLabel
          style={{ elevation: 5 }}
          colors={theme.gradientColors.green}
        >
          <Body2 color={theme.primary.whiteSmoke}>Renda</Body2>
        </ContainerLabel>
        <ContainerSecondary
          style={{ elevation: 5 }}
          colors={theme.gradientColors.green}
        >
          <Button onPress={onPress}>
            <Money color={theme.primary.whiteSmoke} />
          </Button>
        </ContainerSecondary>
      </MotiView>
      <MotiView
        animate={{
          scale: showButton ? 1 : 0,
          rotate: showButton ? "0deg" : "180deg",
        }}
        transition={{
          type: "timing",
          easing: Easing.inOut(Easing.ease),
        }}
      >
        {enableContainer && (
          <Container
            style={{ elevation: 10 }}
            colors={theme.gradientColors.black}
          >
            <Button onPress={onPress}>
              <MotiView
                state={rotateButton}
                transition={{
                  type: "spring",
                }}
              >
                <Plus color={theme.primary.whiteSmoke} />
              </MotiView>
            </Button>
          </Container>
        )}
      </MotiView>
    </ContainerAbsolute>
  );
};

export default FloatButton;
