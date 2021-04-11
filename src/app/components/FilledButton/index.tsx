import React from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';
import styled from 'styled-components/native';

export interface FilledButtonProps
  extends Pick<TouchableWithoutFeedbackProps, 'onPress'> {
  title: string;
}

export default function FilledButton({ title, onPress }: FilledButtonProps) {
  return (
    <StyledTouchableOpacity onPress={onPress}>
      <Title>{title}</Title>
    </StyledTouchableOpacity>
  );
}

const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color: ${p => p.theme.primary};
  border-radius: 20px;
  padding: 12px 4px;
`;

const Title = styled.Text`
  color: ${p => p.theme.text};
  text-align: center;
`;
