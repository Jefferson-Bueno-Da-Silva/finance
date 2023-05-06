import React, { useCallback } from "react";
import { useTheme } from "styled-components/native";
import { MotiView, useAnimationState, useDynamicAnimation } from "moti";

import { useAnimatedRotate, useAnimatedTranslate } from "../../../hooks";
import {
  Button,
  Container,
  ContainerAbsolute,
  ContainerSecondary,
} from "./styles";
import { Money, Plus } from "../../../assets";

const FloatButton: React.FC = () => {
  const rotateButton = useAnimatedRotate();
  const translateButtonGreen = useAnimatedTranslate(60);
  const translateButtonRed = useAnimatedTranslate(120);

  const theme = useTheme();

  const onPress = useCallback(() => {
    rotateButton.transitionTo((prevState) => {
      if (prevState === "from") {
        translateButtonGreen.animateTo({
          translateY: 60,
          opacity: 0,
        });
        translateButtonRed.animateTo({
          translateY: 120,
          opacity: 0,
        });
        return "to";
      }
      translateButtonGreen.animateTo({
        translateY: 0,
        opacity: 1,
      });
      translateButtonRed.animateTo({
        translateY: 0,
        opacity: 1,
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
        state={translateButtonGreen}
        transition={{ delay: 100, damping: 12 }}
      >
        <ContainerSecondary
          style={{ elevation: 5 }}
          colors={theme.gradientColors.green}
        >
          <Button onPress={onPress}>
            <Money color={theme.primary.whiteSmoke} />
          </Button>
        </ContainerSecondary>
      </MotiView>
      <Container style={{ elevation: 10 }} colors={theme.gradientColors.black}>
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
    </ContainerAbsolute>
  );
};

export default FloatButton;